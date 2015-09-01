<?php
header("Content-type: application/json");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "crm_www";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
$conn->set_charset("utf8");

// Check connection
if ($conn->connect_error) die("Connection failed: " . $conn->connect_error);



//customer by Id
if (!empty($_GET["id"]))
{
	$id = $_GET["id"];

	$sql1 = "SELECT * FROM customers WHERE active = true AND id  = " . $id;
	$resultCustomers = $conn->query($sql1);
	while($rowCustomer = $resultCustomers->fetch_assoc()) 
	{
		$id = $rowCustomer["id"];
		$rows[$rowCustomer["id"]]["Info"] = $rowCustomer;

		$rows = getContactsByCustomerId($conn, $rows, $rowCustomer, $id);
		$rows = getTagsByCustomerId($conn, $rows, $rowCustomer, $id);
	}
	echo json_encode($rows);
	$conn->close();

	die();
}



//all customers
$sql1 = "SELECT * FROM customers WHERE active = true";
$resultCustomers = $conn->query($sql1);
while($rowCustomer = $resultCustomers->fetch_assoc()) 
{
	$id = $rowCustomer["id"];
	$rows[$rowCustomer["id"]]["Info"] = $rowCustomer;

	$rows = getContactsByCustomerId($conn, $rows, $rowCustomer, $id);
	$rows = getTagsByCustomerId($conn, $rows, $rowCustomer, $id);
}

echo json_encode($rows);


function getContactsByCustomerId($conn, $rows, $rowCustomer, $id)
{
	$sql2 = "SELECT * FROM contacts WHERE customers_id = " . $id;
	$resultContacts = $conn->query($sql2);
	while($rowContact = $resultContacts->fetch_assoc()) 
	{
		$rows[$rowCustomer["id"]]["Contacts"][] = $rowContact;
	}

	return $rows;
}

function getTagsByCustomerId($conn, $rows, $rowCustomer, $id)
{
		$sql3 = "SELECT t.id, t.name, t.date_create, t.date_edit, t.archive FROM tags t INNER JOIN customers_tags ct ON t.id = ct.tags_id WHERE ct.customers_id = " . $id;
		$resultTags = $conn->query($sql3);
		while($rowTag = $resultTags->fetch_assoc()) 
		{
			$rows[$rowCustomer["id"]]["Tags"][] = $rowTag;
		}

		return $rows;
}


$conn->close();
?>