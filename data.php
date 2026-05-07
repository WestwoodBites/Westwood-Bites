<?php

$file = "bookings.json";

// CREATE booking
if($_SERVER["REQUEST_METHOD"] === "POST"){
    $data = json_decode(file_get_contents($file), true);

    $new = [
        "name" => $_POST["name"],
        "phone" => $_POST["phone"],
        "date" => $_POST["date"],
        "time" => $_POST["time"],
        "people" => $_POST["people"]
    ];

    $data[] = $new;

    file_put_contents($file, json_encode($data));

    echo "Booking Successful!";
    exit;
}

// READ booking
if($_SERVER["REQUEST_METHOD"] === "GET"){
    echo file_get_contents($file);
}
?>