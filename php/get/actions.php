<?php
	header("Content-type: application/json");

	include('../connection.php');

	//all actions
	$sql1 = "SELECT * FROM actions WHERE archive = 'N'";
	$result = $conn->query($sql1);
	while($row = $result->fetch_assoc())
	{
		$rows[] = $row;
	}

	echo json_encode($rows);
?>
