<?php
	include('../connection.php');

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    $actions_id = isset($request->actionsId) ? $request->actionsId : null;
    $name = isset($request->name) ? $request->name : null;
    $type = isset($request->type) ? $request->type : null;
    $reminder = isset($request->reminder) ? $request->reminder : null;
    $date_reminder = isset($request->dateReminder) ? $request->dateReminder : null;
    $date_create = date("Y-m-d H:i:s");
    $date_edit = date("Y-m-d H:i:s");
    $archive = "N";



    $sqlInsert = "INSERT INTO subactions(actions_id, name, type, reminder, date_reminder, date_create, date_edit, archive) VALUES (?,?,?,?,?,?,?,?)";
    if ($stmt = $conn->prepare($sqlInsert))
    {
        $stmt->bind_param("isssssss", $actions_id, $name, $type, $reminder, $date_reminder, $date_create, $date_edit, $archive);
        $stmt->execute();
        echo $conn->insert_id;
        $stmt->close();
        $conn->close();
    }
    else echo 'FOUTJEEEEE';
?>