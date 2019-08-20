<?php
if(isset($_POST['enviar'])){
	$nombre =$_POST['nombre'];
	$apellido =$_POST['apellido'];
	$email =$_POST['email'];
	$email2 =$_POST['email2'];
	$password1 =$_POST['password1'];
	$password2 =$_POST['password2'];
	$birthdate =$_POST['birthdate'];
	$condicion =$_POST['condicion'];
	if(empty($nombre)){
		echo "<p class=""> agrega tu name </p>";
	}else{
		if(empty()){

		}
	}
	if(empty($apellido)){
		echo "<p class=""> agrega tu name </p>";
	}
	if(empty($email)){
		echo "<p class=""> agrega tu name </p>";
	}
	if(empty($email2)){
		echo "<p class=""> agrega tu name </p>";
	}
	if(empty($password1)){
		echo "<p class=""> agrega tu name </p>";
	}
	if(empty($password2)){
		echo "<p class=""> agrega tu name </p>";
	}
	if(empty($birthdate)){
		echo "<p class=""> agrega tu name </p>";
	}
	if(empty($condicion)){
		echo "<p class=""> agrega tu name </p>";
	}

}

?>