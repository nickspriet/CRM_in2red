<?php
	header("Content-type: application/json");

	include('../connection.php');

	//all actions
	$sql1 = "SELECT * FROM attachments WHERE archive = 'N' AND actions_id=".$_GET["actions_id"];
	$result = $conn->query($sql1);
	while($row = $result->fetch_assoc())
	{
		$rows[] = $row;
	}

	echo json_encode($rows);

	$conn->close();
?>
