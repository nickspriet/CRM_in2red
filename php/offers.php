<?php
header("Content-type: application/json");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "crm_www";
$rows = [];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
$conn->set_charset("utf8");

// Check connection
if ($conn->connect_error) die("Connection failed: " . $conn->connect_error);

$sql = "SELECT * FROM offers";
$result = $conn->query($sql);
while($row = $result->fetch_assoc()) 
{
	$rows[] = $row;
}

echo json_encode($rows);

$conn->close();
?>