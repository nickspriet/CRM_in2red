<?php
    //header("Content-type: application/json");

    include('connection.php');

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

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
    $date_active = date("Y-m-d H:i:s");
    $date_create = date("Y-m-d H:i:s");
    $date_edit = date("Y-m-d H:i:s");
    $active = "Y";
    $archive = "N";



    $sqlInsert = "INSERT INTO customers(name, phone, email, billing_street, billing_zipcode, billing_city, billing_county, billing_country, office_street, office_zipcode, office_city, office_county, office_country, vat, date_active, date_create, date_edit , active, archive) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    if ($stmt = $conn->prepare($sqlInsert))
    {
        $stmt->bind_param("sssssssssssssssssss", $name, $phone, $email, $billing_street, $billing_zipcode, $billing_city, $billing_county, $billing_country, $office_street, $office_zipcode, $office_city, $office_county, $office_country, $vat, $date_active, $date_create, $date_edit , $active, $archive);
        $stmt->execute();
        echo $conn->insert_id;
        $stmt->close();
        $conn->close();
    }
    else echo 'FOUTJEEEEE';


?>