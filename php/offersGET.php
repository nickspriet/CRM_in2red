<?php
    header("Content-type: application/json");

    include("connection.php");


    //all offers
    $sql = "SELECT o.*, c.name as customers_name FROM offers o INNER JOIN customers c ON o.customers_id = c.id WHERE o.archive = 'N'";
    $result = $conn->query($sql);
    while($row = $result->fetch_assoc())
    {
        $rows[] = $row;
    }

    echo json_encode($rows);

    $conn->close();
?>