<?php
require_once "database.php";

$db = new Database();
$query = 'SELECT * FROM pengguna';
$db->query($query);
$results = $db->getAllResult();

foreach ($results as $row) {
    // Access the individual fields of each row
    var_dump($row);
    echo "<br>";
    // ... and so on
}
