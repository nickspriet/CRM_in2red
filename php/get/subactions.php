<?php
    header("Content-type: application/json");

	include('../connection.php');

    //subaction by id
    if (!empty($_GET["id"]))
  	{
  		$id = $_GET["id"];

  		$sql1 = "SELECT a.id as 'actions_id', a.customers_id, a.name, a.type, a.reminder, a.date_reminder, a.date_create, a.date_edit, a.archive, c.name as 'customers_name' FROM actions a INNER JOIN customers c ON a.customers_id = c.id WHERE a.archive = 'N' AND a.id=".$id;
  		$result = $conn->query($sql1);
  		while($row = $result->fetch_assoc())
  		{
  			$id = $row["actions_id"];
  			$rows[$id]["Info"] = $row;

  			$sql2 = "SELECT id as 'sub_id', actions_id, name, type, reminder, date_reminder, date_create, date_edit, archive FROM subactions WHERE archive = 'N' AND actions_id=".$id;
  			$result2 = $conn->query($sql2);
  			while($row2 = $result2->fetch_assoc())
  			{
  				$rows[$id]["Subactions"][] = $row2;
  			}
  		}

		if (!isset($rows)) http_response_code(404);
		else echo json_encode($rows);

  		die();
  	}
?>