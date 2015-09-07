<?php
    //header("Content-type: application/json");

	include('../connection.php');

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    $customers_id = isset($request->customersId) ? $request->customersId : null;
    $tags_id = isset($request->tagsId) ? $request->tagsId : null;
    $date_create = date("Y-m-d H:i:s");
    $date_edit = date("Y-m-d H:i:s");
    $archive = "N";


    $sqlInsert = "INSERT INTO customers_tags(customers_id, tags_id, date_create, date_edit, archive) VALUES (?,?,?,?,?)";
    if ($stmt = $conn->prepare($sqlInsert))
    {
        $stmt->bind_param("iisss", $customers_id, $tags_id, $date_create, $date_edit, $archive);
        $stmt->execute();
        echo $conn->insert_id;
        $stmt->close();
        $conn->close();
    }
    else echo 'FOUTJEEEEE';
?>