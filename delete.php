<?php

$id = $_GET["id"];
$file = "bookings.json";

$data = json_decode(file_get_contents($file), true);

array_splice($data, $id, 1);

file_put_contents($file, json_encode($data));

header("Location: admin.php");

?>