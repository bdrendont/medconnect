<?php
    echo "estas en Control del Login <br/>";
    //echo $_POST["correo"]." ".$_POST["contrasena"]
    //echo $_GET["user"]." ".$_GET["pass"];

    //require_once("config.php");
    //echo "<br>Usuario de la Base de datos: ".$db_user;

    
    require_once("Config.class.php");
    $bd = new Config();
    $conn = $bd->conexion();
    $sql = "INSERT INTO `tbcategorias`(`IDCategoria`, `CatNombre`, `IDUsuarioFK`) VALUES (null,'Prueba 1','1')";
    $stmt = $conn ->prepare($sql);
    if($stmt->execute()){
        echo "SQL realizada correctamente";
    }else{
        echo "SQL no aplicada";
    }
?>