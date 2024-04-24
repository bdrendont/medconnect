<?php

class Config {
    private $db_host = "localhost"; //Lugar o IP donde esta el servidor de Base de datos
    private $db_port = "3306"; // Puerto de Base de datos MySQL
    private $db_user = "dbBrignI"; // Nombre del Usuario para conectarnos a la Base de Datos
    private $db_pass = "MedDB-5789"; // Contraseña del Usuario de la Base de datos
    private $db_name = "dbRaul"; // Nombre de la Base de Datos

    public function conexion(){
        $link = "mysql:host=".$this->db_host.":".$this->db_port.";dbname=".$this->db_name.";";
        try{
            $conn = new PDO($link,$this->db_user, $this->db_pass);
            $conn -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        }catch(PDOException $e){
            die("Error: ".$e->getMessage());
        }
    }
}
?>