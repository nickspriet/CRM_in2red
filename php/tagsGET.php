<?php
	header("Content-type: application/json");

	include('connection.php');


	//all tags
	$sql1 = "SELECT t.*, tt.name as tagtypes_name FROM tagtypes tt INNER JOIN tags t ON tt.id = t.tagtypes_id WHERE tt.archive = 'N' AND t.archive = 'N'";
	$result = $conn->query($sql1);
	while($row = $result->fetch_assoc())
	{
		$rows[] = $row;
	}

	echo json_encode($rows);
?>
