<?php
header('Content-Type: application/json');

// --- CONFIGURATIE ---
// Pas dit aan naar het e-mailadres waar de berichten heen moeten
$to_email = "info@mercatorinkoopadviezen.nl"; 
$subject_prefix = "Nieuw bericht van website: ";

// Alleen POST aanvragen toestaan
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["error" => "Alleen POST aanvragen zijn toegestaan."]);
    exit;
}

// Ontvang JSON data
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["error" => "Ongeldige data ontvangen."]);
    exit;
}

// Data valideren en opschonen
$name = filter_var($data['name'] ?? '', FILTER_SANITIZE_STRING);
$email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$subject_input = filter_var($data['subject'] ?? '', FILTER_SANITIZE_STRING);
$message = filter_var($data['message'] ?? '', FILTER_SANITIZE_STRING);

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(["error" => "Naam, email en bericht zijn verplicht."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["error" => "Ongeldig e-mailadres."]);
    exit;
}

// Email samenstellen
$email_subject = $subject_prefix . $subject_input;
$email_body = "Nieuw bericht van de website:\n\n";
$email_body .= "Naam: $name\n";
$email_body .= "Email: $email\n";
$email_body .= "Onderwerp: $subject_input\n\n";
$email_body .= "Bericht:\n$message\n";

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Email versturen
if (mail($to_email, $email_subject, $email_body, $headers)) {
    echo json_encode(["success" => "Bericht succesvol verzonden!"]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Er is een fout opgetreden bij het versturen van de e-mail."]);
}
?>
