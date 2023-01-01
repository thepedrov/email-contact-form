<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"));

    $headers = "From: " . $data->name . " <" . $data->email . ">\r\n";
    $headers .= "Reply-To: " . $data->email;

    if (mail("YOUR EMAIL HERE", $data->subject, $data->message, $headers)) {
        header(http_response_code(200));
        return;
    }
}

header(http_response_code(400));
?>