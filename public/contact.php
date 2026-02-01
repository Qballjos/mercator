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
$name = htmlspecialchars(strip_tags($data['name'] ?? ''), ENT_QUOTES, 'UTF-8');
$email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$subject_input = htmlspecialchars(strip_tags($data['subject'] ?? ''), ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars(strip_tags($data['message'] ?? ''), ENT_QUOTES, 'UTF-8');

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

// Belangrijk voor TransIP en andere hosting: de 'From' MOET een adres van het domein zelf zijn
// We gebruiken het $to_email adres als afzender om te voorkomen dat de mailserver het bericht weigert.
$headers = "From: " . $to_email . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Email versturen
// Bij TransIP is het soms nodig om een extra parameter (-f) mee te geven om de afzender te forceren
if (mail($to_email, $email_subject, $email_body, $headers, "-f" . $to_email)) {
    echo json_encode(["success" => "Bericht succesvol verzonden!"]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "De e-mail kon niet worden verzonden. Dit kan komen door een serverbeperking. Neem contact op met de beheerder."]);
}
?>