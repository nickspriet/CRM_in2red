<?php
	header("Content-type: application/json");

	include('../connection.php');

	//action by id
	if (!empty($_GET["actions_id"]))
	{
		$id = $_GET["actions_id"];
		$sql1 = "SELECT * FROM attachments WHERE archive = 'N' AND actions_id=".$id;
	}
	else if (!empty($_GET["subactions_id"]))
	{
		$id = $_GET["subactions_id"];
		$sql1 = "SELECT * FROM attachments WHERE archive = 'N' AND subactions_id=".$id;
	}

	//all attachments
	$result = $conn->query($sql1);
	while($row = $result->fetch_assoc())
	{
		$rows[] = $row;
	}

	echo json_encode($rows);

	$conn->close();
?>
