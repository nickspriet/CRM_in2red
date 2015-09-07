<?php
	header("Content-type: application/json");

	include('../connection.php');

	//action by id
	if (!empty($_GET["id"]))
	{
		$id = $_GET["id"];

		$sql1 = "SELECT a.*, c.name as customers_name FROM actions a INNER JOIN customers c ON a.customers_id = c.id WHERE a.archive = 'N' AND a.id=".$id;
		$result = $conn->query($sql1);
		while($row = $result->fetch_assoc())
		{
			$rows[] = $row;
		}

		echo json_encode($rows);
		$conn->close();

		die();
	}
	//actions by customers_id
	else if (!empty($_GET["customers_id"]))
	{
		$customers_id = $_GET["customers_id"];

		$sql1 = "SELECT * FROM actions WHERE archive = 'N' AND customers_id=".$customers_id;
		$result = $conn->query($sql1);
		while($row = $result->fetch_assoc())
		{
			$rows[] = $row;
		}

		echo json_encode($rows);
		$conn->close();

		die();
	}


	//all actions
	$sql1 = "SELECT a.*, c.name as customers_name FROM actions a INNER JOIN customers c ON a.customers_id = c.id WHERE a.archive = 'N'";
	$result = $conn->query($sql1);
	while($row = $result->fetch_assoc())
	{
		$rows[] = $row;
	}

	echo json_encode($rows);

	$conn->close();
?>
