<?php
header('Content-Type: application/json');

// --- CONFIGURATIE ---
// Pas dit aan naar het e-mailadres waar de berichten heen moeten
$to_email = "info@mercatorinkoopadviezen.nl";
// Dit MOET overeenkomen met de 'sendmail_from' instelling in je TransIP paneel
$from_email = "noreply@mercatorinkoopadviezen.nl";
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

// Voor TransIP: Hou de headers zo simpel mogelijk. 
// Geen namen, alleen het geautoriseerde e-mailadres.
$headers = "From: " . $from_email . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Email versturen
// We proberen het nu met de meest basale aanroep
$success = mail($to_email, $email_subject, $email_body, $headers, "-f" . $from_email);

if ($success) {
    echo json_encode(["success" => "Bericht succesvol verzonden!"]);
} else {
    http_response_code(500);
    $error_msg = "De e-mail kon niet worden verzonden door de server. ";
    $error_msg .= "Geadviseerde actie: Controleer in het TransIP paneel of 'noreply@mercatorinkoopadviezen.nl' correct staat ingesteld bij 'sendmail_from'. ";
    $error_msg .= "Als dat zo is, neem dan contact op met TransIP support; de mail() functie op de server weigert de opdracht.";
    echo json_encode(["error" => $error_msg]);
}
?>