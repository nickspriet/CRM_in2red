<?php

    //include('../connection.php');

    //get postdata
    $customers_id = $_POST["customersId"];
    echo "customers_id: " . $customers_id;


    //make directory with customers_id
    //$target_dir = "/_userfiles";
    $target_dir = "D:/in2red/CRM met Angular/4. Dynamic site with angular/root/app/_userfiles";

    if (!is_dir($target_dir . DIRECTORY_SEPARATOR . $customers_id)) mkdir($target_dir . "/" . $customers_id, 0777);

    if (!empty( $_FILES )) {

        $tempPath = $_FILES[ 'file' ][ 'tmp_name' ];
        //$uploadPath = dirname( __FILE__ ) . DIRECTORY_SEPARATOR . '_userfiles' . DIRECTORY_SEPARATOR . $_FILES[ 'file' ][ 'name' ];

        $target_dir = $target_dir . DIRECTORY_SEPARATOR . $customers_id;
        $uploadPath = $target_dir . DIRECTORY_SEPARATOR . $_FILES[ 'file' ][ 'name' ];

        echo "uploadPath: " . $uploadPath;

        move_uploaded_file($tempPath, $uploadPath);

        $answer = array('answer' => 'File transfer completed');
        $json = json_encode($answer);

        echo $json;
    }
    else {
        echo 'No files';
    }



?>