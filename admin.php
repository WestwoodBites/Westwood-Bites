<?php
$data = json_decode(file_get_contents("bookings.json"), true);
?>

<!DOCTYPE html>
<html>
<head>
<title>Admin Panel</title>
<link rel="stylesheet" href="admin.css">
</head>

<body>

<h1>Booking Dashboard</h1>

<table>
<tr>
<th>Name</th>
<th>Phone</th>
<th>Date</th>
<th>Time</th>
<th>People</th>
<th>Action</th>
</tr>

<?php foreach($data as $i => $b): ?>
<tr>
<td><?= $b["name"] ?></td>
<td><?= $b["phone"] ?></td>
<td><?= $b["date"] ?></td>
<td><?= $b["time"] ?></td>
<td><?= $b["people"] ?></td>
<td>
<a href="deletephp?id=<?= $i ?>">Delete</a>
</td>
</tr>
<?php endforeach; ?>

</table>

</body>
</html>