<?php
    //header("Content-type: application/json");

    include('connection.php');

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    $customers_id = isset($request->customersId) ? $request->customersId : null;
    $firstname = isset($request->firstname) ? $request->firstname : null;
    $lastname = isset($request->lastname) ? $request->lastname : null;
    $title = isset($request->title) ? $request->title : null;
    $phone = isset($request->phone) ? $request->phone : null;
    $mobile = isset($request->mobile) ? $request->mobile : null;
    $email = isset($request->email) ? $request->email : null;
    $date_create = date("Y-m-d H:i:s");
    $date_edit = date("Y-m-d H:i:s");
    $archive = "N";



    $sqlInsert = "INSERT INTO contacts(customers_id, firstname, lastname, title, phone, mobile, email, date_create, date_edit, archive) VALUES (?,?,?,?,?,?,?,?,?,?)";
    if ($stmt = $conn->prepare($sqlInsert))
    {
        $stmt->bind_param("isssssssss", $customers_id, $firstname, $lastname, $title, $phone, $mobile, $email, $date_create, $date_edit, $archive);

       // print_r($stmt);

        try{
            $stmt->execute();
        }
        catch (Exception $ex) {
            echo $e->getMessage();
        }

        print_r($stmt);

        echo $conn->insert_id;
        $stmt->close();
        $conn->close();
    }
    else echo 'FOUTJEEEEE';
?>