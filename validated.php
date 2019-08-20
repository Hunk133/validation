<?php
$correo=$_POST['email'];
$password=$_POST['password'];
$conexion=mysql_connect("localhost", "root", "1234", "bd");
$consulta="SELECT * FROM email WHERE email='$correo' and password='$password'";
$result