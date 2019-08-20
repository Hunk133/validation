
window.onload = iniciar;
function iniciar(){

	send=document.getElementById("send").addEventListener('click',validar);
}


function validarnombre(){

	var elemento = document.getElementById("nombre");
	var patron = /^[a-zA-ZÑñÁáÉéÍíÓóÚúüÜ\s]+$/;

		if(elemento.value==="" || elemento.value.length>10 || !patron.test(elemento.value) ) {
		error(nombre);
		
		// $("#nombre").addClass("is-invalid");
		// document.getElementById("oki").innerHTML="<div>Please enter a valid name</div>";	
		return false;
		
	}
	
	return true;
	
}

function validarapellido(){

	var elemento = document.getElementById("apellido");
	var patron2 = /^[a-zA-ZÑñáéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙ\s]+$/;
		if(elemento.value==="" || elemento.value.length>10 || !patron2.test(elemento.value)){
		error2(elemento);	
		return false;
	}
	return true;
}

function validaremail(){

	var elemento = document.getElementById("email");
	var expremail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		if(elemento.value==="" || elemento.value.length>50 || !expremail.test(elemento.value)){
		error3(elemento);	
		return false;
	}
	return true;
}

function validaremail2(){

	var elemento = document.getElementById("email2");
	
		if(elemento.value==="" || elemento.value.length>50){
		error4(elemento);	
		return false;
	}
	return true;
}

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

function validarpassword1(){

	var elemento = document.getElementById("password1");
	
		if(elemento.value==="" || elemento.value.length<8 || elemento.value.length>10){
		error5(elemento);
		return false;
	}
	return true;
}

function validarpassword2(){

	var elemento = document.getElementById("password2");
	
		if(elemento.value==="" || elemento.value.length<8 || elemento.value.length>10){
		error6(elemento);	
		return false;
	}
	return true;
}

function passiguales(){
	var firstpass = document.getElementById("password1");
	var secondpass = document.getElementById("password2");
	if (firstpass.value != secondpass.value) {
		errorpass(firstpass, secondpass);
		firstpass.value="";
		secondpass.value="";
		return false;
		firstpass.focus();
	}
	return true;
}

function validarcalendario(){
	var elemento=document.getElementById("picker");
	if(elemento.value==false){
		error8(elemento);
	return false;
	
	}
	return true;
}

function validarcheck(){
	var elemento =document.getElementById("condicion").checked;
	if(elemento==false){
		error7(elemento);
		return false;
	}
	return true;
}


function validar(e){

	
	if(validarnombre() && validarapellido () && validaremail () && validaremail2() && emailsiguales() && 
	validarpassword1() && validarpassword2() && passiguales() && validarcalendario() && validarcheck() &&  confirm("aceptar")){
	return true;
	}else{

		e.preventDefault();
		$("#regiform").addClass("was-validated");
		return false;
	}

}

function error(elemento){
	document.getElementById("oki").innerHTML=elemento.validationMessage;
	var string= "<div>Please enter a valid first name</div>";
	oki.innerHTML=string;
	nombre.focus();	
}
function error2(elemento){
	document.getElementById("oki2").innerHTML=elemento.validationMessage;
	var string= "<div>Please enter a valid last name</div>";
	oki2.innerHTML=string;
	apellido.focus();	
}
function error3(elemento){
	document.getElementById("oki3").innerHTML=elemento.validationMessage;
	var string= "<div>Please enter a valid email</div>";
	oki3.innerHTML=string;
	email.focus();	
}
function error4(elemento){
	document.getElementById("oki4").innerHTML=elemento.validationMessage;
	var string= "<div>Please enter a valid email</div>";
	oki4.innerHTML=string;
	email2.focus();	
}
function error5(elemento){
	document.getElementById("oki5").innerHTML=elemento.validationMessage;
	var string= "<div>Please enter a valid password</div>";
	oki5.innerHTML=string;
	password1.focus();	
}
function error6(elemento){
	document.getElementById("oki6").innerHTML=elemento.validationMessage;
	var string= "<div>Please enter a valid password</div>";
	oki6.innerHTML=string;
	password2.focus();	
}
function error7(elemento){
	document.getElementById("oki7").innerHTML=elemento.validationMessage;
	var string= "<div>You must agree before submitting</div>";
	oki7.innerHTML=string;
		
}
function error8(elemento){
	document.getElementById("oki8").innerHTML=elemento.validationMessage;
	var string= "<div>Select your Birthdate</div>";
	oki8.innerHTML=string;
}
function errormails(elemento){
	document.getElementById("oki3").innerHTML=elemento.validationMessage;
	document.getElementById("oki4").innerHTML=elemento.validationMessage;
	var string= "<div>Please enter the same email</div>";
	oki3.innerHTML=string;
	email.focus();
}

function errorpass(elemento){
	document.getElementById("oki5").innerHTML=elemento.validationMessage;
	document.getElementById("oki6").innerHTML=elemento.validationMessage;
	var string= "<div>Please enter the same password</div>";
	oki5.innerHTML=string;
	password1.focus();
}


function limpiar(elemento){
	$("#nombre").removeClass("is-invalid");
	$("#nombre").addClass("is-valid");
	
}


