<?php

	include('../connection.php');

	//update customer
     $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    $id = isset($request->id) ? $request->id : null;
    $customertypes_id = isset($request->customertypesId) ? $request->customertypesId : null;
    $name = isset($request->name) ? $request->name : null;
    $phone = isset($request->phone) ? $request->phone : null;
    $email = isset($request->email) ? $request->email : null;
    $billing_street = isset($request->billingStreet) ? $request->billingStreet : null;
    $billing_zipcode = isset($request->billingZipcode) ? $request->billingZipcode : null;
    $billing_city = isset($request->billingCity) ? $request->billingCity : null;
    $billing_county = isset($request->billingCounty) ? $request->billingCounty : null;
    $billing_country = isset($request->billingCountry) ? $request->billingCountry : null;
    $office_street = isset($request->officeStreet) ? $request->officeStreet : null;
    $office_zipcode = isset($request->officeZipcode) ? $request->officeZipcode : null;
    $office_city = isset($request->officeCity) ? $request->officeCity : null;
    $office_county = isset($request->officeCounty) ? $request->officeCounty : null;
    $office_country = isset($request->officeCountry) ? $request->officeCountry : null;
    $vat = isset($request->vat) ? $request->vat : null;
    $date_edit = date("Y-m-d H:i:s");
    $active = isset($request->active) ? $request->active : null;
    $archive = isset($request->archive) ? $request->archive : null;



    $sqlUpdate = "UPDATE customers SET customertypes_id=".$customertypes_id.", name='".$name."', phone='".$phone."', email='".$email."', billing_street='".$billing_street."', billing_zipcode='".$billing_zipcode."', billing_city='".$billing_city."', billing_county='".$billing_county."', billing_country='".$billing_country."', office_street='".$office_street."', office_zipcode='".$office_zipcode."', office_city='".$office_city."', office_county='".$office_county."', office_country='".$office_country."', vat='".$vat."', date_edit='".$date_edit."', active='".$active."', archive='".$archive."' WHERE id=".$id;
    if ($stmt = $conn->prepare($sqlUpdate))
    {
        $stmt->execute();
        $stmt->close();
        $conn->close();
    }
    else echo 'FOUTJEEEEE';
?>