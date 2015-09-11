<?php

	include('../connection.php');

    //update contact
    $id = isset($request->id) ? $request->id : null;
    $customers_id = isset($request->customersId) ? $request->customersId : null;
    $firstname = isset($request->firstname) ? $request->firstname : null;
    $lastname = isset($request->lastname) ? $request->lastname : null;
    $title = isset($request->title) ? $request->title : null;
    $phone = isset($request->phone) ? $request->phone : null;
    $mobile = isset($request->mobile) ? $request->mobile : null;
    $email = isset($request->email) ? $request->email : null;
    $date_edit = date("Y-m-d H:i:s");
    $archive = "N";



    $sqlUpdate = "UPDATE contacts SET firstname='".$firstname."', lastname='".$lastname."', title='".$title."', phone='".$phone."', mobile='".$mobile."', email='".$email."', date_edit='".$date_edit."', archive='".$archive"' WHERE id=".$id" AND customers_id=".$customers_id";
    if ($stmt = $conn->prepare($sqlUpdate))
    {
        $stmt->execute();
        $stmt->close();
        $conn->close();
    }
    else echo 'FOUTJEEEEE';

?>