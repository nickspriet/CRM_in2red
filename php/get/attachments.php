<?php
	header("Content-type: application/json");

	include('../connection.php');

	//action by id
	if (!empty($_GET["actions_id"]))
	{
		$id = $_GET["actions_id"];
		$sql1 = "SELECT * FROM attachments WHERE archive = 'N' AND actions_id=".$id;

		//all attachments
		$result = $conn->query($sql1);
		while($row = $result->fetch_assoc())
		{
			$rows[] = $row;
		}

			if (!isset($rows)) http_response_code(404);
        		else echo json_encode($rows);

		$conn->close();
	}
?>
