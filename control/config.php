<?php

    $db_host = "localhost"; //Lugar o IP donde esta el servidor de Base de datos
    $db_port = "3306"; // Puerto de Base de datos MySQL
    $db_user = "dbBrignI"; // Nombre del Usuario para conectarnos a la Base de Datos
    $db_pass = "MedDB-5789"; // Contraseña del Usuario de la Base de datos
    $db_name = "dbRaul"; // Nombre de la Base de Datos

    $link = "mysql:host=".$db_host.":".$db_port.";dbname=".$db_name.";";
    
    try{
        $conn = new PDO($link,$db_user, $db_pass);
        $conn -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "Conexión OK";
    }catch(PDOException $e){
        die("Error: ".$e->getMessage());
    }
?>