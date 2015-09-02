<?php
    //header("Content-type: application/json");

    include('connection.php');

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    $customer_id = isset($request->customer_id) ? $request->customer_id : null;
    $firstname = isset($request->firstname) ? $request->firstname : null;
    $lastname = isset($request->lastname) ? $request->lastname : null;
    $title = isset($request->title) ? $request->title : null;
    $phone = isset($request->phone) ? $request->phone : null;
    $mobile = isset($request->mobile) ? $request->mobile : null;
    $email = isset($request->email) ? $request->email : null;
    $date_create = date("Y-m-d H:i:s");
    $date_edit = date("Y-m-d H:i:s");
    $archive = "N";



    $sqlInsert = "INSERT INTO contacts(customer_id, firstname, lastname, title, phone, mobile, email, $date_create, $date_edit, $archive) VALUES (?,?,?,?,?,?,?,?)";
    if ($stmt = $conn->prepare($sqlInsert))
    {
        $stmt->bind_param("isssssss", customer_id, $fistname, $lastname, $title, $phone, $mobile, $email, $date_create, $date_edit, $archive);
        $stmt->execute();
        $stmt->close();
        $conn->close();
    }
    else echo 'FOUTJEEEEE';


?>