
window.onload = iniciar;
function iniciar(){
	send=document.getElementById("send").addEventListener('click',validar);

}


// formas de validar campos

function validarnombre(){

// se crea la variable a tomara para validar, es importante poner un id al imput para tomar la variable.
	var elemento = document.getElementById("nombre"); 
// se pregunta a traves de un if si el elemento cumple con los requisitos de lo contrario llamara a la funcion error y 
// retornara a la misma vista. 
	if (elemento.value==="" || elemento.value.length>10 ) {
		error(elemento);
		return false;
	}
	return true;

}

// cuando se envie el formulario se activa la funcion validar la cual toma otras funcionas y confirmas que estas se cumplan de 
// lo contrario se evita enviar y se le agrega una clase al formulario
function validar(e){
	// $(document).ready(function(){
	// 	$("input").keyup(function(){
	// 		$("elemento").addClass("is-valid");
	// 	})
	// })
	limpiar("#nombre");
	if(validarnombre() && confirm("aceptar")){
		return true;
	}else{

		e.preventDefault();
		$("#regiform").addClass("was-validated");
		return false;
	}

}

// la funcion error sirve para declarar y donde mostrar el mensaje que requiera la validacion
function error(elemento){
	document.getElementById("oki").innerHTML=elemento.validationMessage;
	// var string= "<div>Please enter a name</div>";
	// oki.innerHTML=string;
	nombre.focus();	
}
// otra forma es declarar todas las variables y ir realizando las validaciones continuamente
function validar(){
	var nombre, apellido, email, email2, password1, password2, expregnomb, expregcorr;
	
	nombre = document.getElementById("nombre");
	apellido = document.getElementById("apellido");
	email = document.getElementById("email");
	email2 = document.getElementById("email2");
	password1 = document.getElementById("password1");
	password2 = document.getElementById("password2");
	ok= document.getElementById("ok");
	// para realizar expresiones regulares verificar el diccionario de estas 
	expregnomb=/^[a-zA-ZÑñÁáÉéÍíÓóÚú\s]+$/;


	if (nombre.value===""||apellido.value===""||email.value===""||email2.value===""||password1.value===""||password2.value==="") {
		alert("debe rellenar el campo nombre");
		return false;

	}else 
	// el innerHTML sirve para agregar un mensaje personalizado o validado a traves de etiquetas html 
	if (nombre.value===""||nombre.value.length>10) {

		$("#nombre").addClass("is-invalid");
		var string= "<div>debe ingresar algo</div>";
		oki.innerHTML=string;
		$("#nombre").addClass("is-invalid");
		var string= "<div>the name is too looonggggggg</div>";
		oki.innerHTML=string;
		alert("el nombre es muy largo");
		nombre.focus();
		return false;
	}else{

		$("#nombre").change(function(){
			$("#nombre").removeClass("is-invalid");
			$("#nombre").addClass("is-valid");
			return true;
		});
		
	}
	else if (apellido.value.length>10) {
		var string= "<div class='alert-danger'>the lastname is too looonggggggg</div>";
		ok.innerHTML=string;
		apellido.focus();
		return false;
	
	}else if (email.value.length>10) {
		alert("el correo es muy grande");
		email.focus();
		return false;
	}else if (email2.value.length>10) {
		alert("el correo es muy grande");
		email2.focus();
		return false;
	}else if (password1.value.length>10) {
		alert("la contraseña es muy larga");
		password1.focus();
		return false;
	}else if (password2.value.length>10){
		alert("la contraseña es muy larga");
		password2.focus();
		return false;
	}


}

// otra forma de hacer una funcion error y personalizar el mensaje 
function error2(elemento){
	var string= "<div>Please enter a valided name</div>";
	oki.innerHTML=string;
	nombre.focus();	
}


// la forma de validar por el evento checkValidity toma las restricciones de las etiquetas html para validar
function validarnombre(){

	var elemento = document.getElementById("nombre");
	
	if (!elemento.checkValidity()) {
		if(elemento.value===""){
		error(elemento);	
		}
		// error(elemento);
		return false;
	}
	return true;

}
// una forma de validar la expresión regular
function validarexprecion(){
	var patron= /^[a-zA-ZÑñÁáÉéÍíÓóÚú\s]*$/;
	var elemento = document.getElementById("#nombre");
	if (!patron.test(elemento)) {

		$("#nombre").addClass("is-invalid");

		// alert("ponga algo");
		document.getElementById("oki").innerHTML="<div>Please enter a name</div>";
		return false;
		nombre.focus();
	}
}
else if (!patron.test(nombre)) {
		// alert("ponga algo");
		$("#nombre").addClass("is-invalid");
		document.getElementById("oki").innerHTML="<div>Please enter a name</div>";
		return false;
		nombre.focus();
	}
// para comprar 2 campos si es encesario que sean iguales
function emailsiguales(){
	var email =document.getElementById("email");
	var email2 =document.getElementById("email2");
	if(email.value != email2.value){
		errormails(email, email2);
		email.value="";
		email2.value="";
		return false;

	}
	return true;
}


// estilo para probar si esta malo
<style >
	input.invalid{
  border-color: red;
  
}

input:focus.invalid {
  outline: none;
}


</style>