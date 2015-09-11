<?php
	include('../connection.php');

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    $actions_id = isset($request->actionsId) ? $request->actionsId : null;
    $subactions_id = isset($request->subactionsId) ? $request->subactionsId : null;
    $name = isset($request->name) ? $request->name : null;
    $date_create = date("Y-m-d H:i:s");
    $date_edit = date("Y-m-d H:i:s");
    $archive = "N";



    $sqlInsert = "INSERT INTO attachments(actions_id, subactions_id, name, date_create, date_edit, archive) VALUES (?,?,?,?,?,?)";
    if ($stmt = $conn->prepare($sqlInsert))
    {
        $stmt->bind_param("iissss", $actions_id, $subactions_id, $name, $date_create, $date_edit, $archive);
        $stmt->execute();
        echo $conn->insert_id;
        $stmt->close();
        $conn->close();
    }
    else echo 'FOUTJEEEEE';
?>