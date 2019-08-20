<div class="section container-fluid">
	<div class="register row">
		<div class="col-md-5 ">
			<div class="mensaje" style="">
				<img class="" src="images/Reg-logo1.jpeg" alt="">
			</div>
		</div> 


		<!-- Formulario -->
		
		<div class="col-md-7">
			<form class="form-edit" method="post" action="contr/control_register.php" id="regiform" >
			  <div class="form-row ">
			    <div class="col-md-4 mb-3">
			      <label for="nombre">First Name</label>
			      <div class="input-group" >
			        <div class="input-group-prepend">
			          <span class="input-group-text" id="inputGroupPrepend1"><i class="fas fa-user"></i></span>
			          </div>
			    		<input type="text" class="form-control" id="nombre" name="nombre" placeholder="First Name" aria-describedby="inputGroupPrepend3" maxlength="20" pattern="[a-zA-ZÑñÁáÉéÍíÓóÚú\s]{2,20}" title="first name" required >
						<div id="oki" class="invalid-feedback">
			          Please choose a username.
			        </div>
			      </div>
			    </div>

			    <div class="col-md-4 mb-3">
			      <label for="apellido">Last Name</label>
			      <div class="input-group">
			        <div class="input-group-prepend">
			          <span class="input-group-text" id="inputGroupPrepend2"><i class="fas fa-user"></i></span>
			        </div>
			        <input type="text" class="form-control" id="apellido" name="apellido" placeholder="Last Name" aria-describedby="inputGroupPrepend3" maxlength="20" pattern="[a-zA-ZÑñÁáÉéÍíÓóÚú\s]{2,20}" title="last name" required >
			        <div id="oki2" class="invalid-feedback">
			          <!-- Please choose a last name. -->
			        </div>
			      </div>
			    </div>

			    <div class="col-md-8 mb-3">
			      <label for="email">E-mail</label>
			      <div class="input-group">
			        <div class="input-group-prepend">
			          <span class="input-group-text" id="inputGroupPrepend3">@</span>
			        </div>
			        <input type="email" class="form-control" id="email" name="email" placeholder="Email" aria-describedby="inputGroupPrepend3" maxlength="50" title="E-mail" required>
			        <div id="oki3" class="invalid-feedback">
			          Please choose a E-mail.
			        </div>
			      </div>
			    </div>

			    <div class="col-md-8 mb-3">
			      <label for="email">Repeat E-mail</label>
			      <div class="input-group">
			        <div class="input-group-prepend">
			          <span class="input-group-text" id="inputGroupPrepend3">@</span>
			        </div>
			        <input type="email" class="form-control" id="email2" name="email2" placeholder="Repeat Email" aria-describedby="inputGroupPrepend3"  maxlength="50" title="Repeat E-mail" required >
			        <div id="oki4" class="invalid-feedback">
			          Please repeat a E-mail.
			        </div>
			      </div>
			    </div>

			    <div class="password requirement">
			    	<dir>Password must contain the following:</dir>
					<ul>
						<li>A minimum of 8 characters</li>
						<li>A maximum of 10 characters</li>
						<li>At least one uppercase letter</li>
						<li>At least one lowercase letter</li>
						<li>At least one number</li>
					</ul>
			    	
			    </div>

			  </div>
			  <div class="form-row">

			    <div class="col-md-4 mb-3">
			      <label for="password1">Password</label>
			      <div class="input-group">
			        <div class="input-group-prepend">
			          <span class="input-group-text" id="inputGroupPrepend3"><i class="fas fa-key"></i></span>
			        </div>
			      	<input type="password" class="form-control" id="password1" name="password1" placeholder="Password" aria-describedby="inputGroupPrepend3" minlength="8" maxlength="10" title="password" required >
			        <div id="oki5" class="invalid-feedback">
			          Please enter a password
			        </div>
			      </div>
			    </div>

			    <div class="col-md-4 mb-3">
			      <label for="password2">Repeat Password</label>
			      <div class="input-group">
			        <div class="input-group-prepend">
			          <span class="input-group-text" id="inputGroupPrepend4"><i class="fas fa-key"></i></span>
			        </div>
			        <input type="password" class="form-control" id="password2" name="password2" placeholder="Repeat Password" aria-describedby="inputGroupPrepend3" minlength="8" maxlength="10" title=" Repeat the password" required >
			        <div id="oki6" class="invalid-feedback">
			          Repeat the password
			        </div>
			      </div>
			    </div>

			    <div class="col-md-6 pb-2">
			      <label for="birthdate">Birthdate</label>
			      <div class="input-group">
			        <div class="input-group-prepend">
			          <span class="input-group-text" id="inputGroupPrepend4"><i class="far fa-calendar-alt"></i></span>
			        </div>
			        <input type="date" class="form-control" id="picker" name="birthdate" placeholder="Repeat Password" aria-describedby="inputGroupPrepend3" title="Select your Birthdate" required >
			        <div id="oki8" class="invalid-feedback">
			          Put a date
			        </div>
			      </div>
			    </div>
				
		
			  </div>
			  <div class="form-group">
			    <div class="form-check">
			      <input class="form-check-input" type="checkbox" id="condicion" name="condicion" required >
			      <label class="form-check-label" for="condicion" title="agree" >
			        Agree to terms and conditions
			      </label>
			      <div id="oki7" class="invalid-feedback">
			        You must agree before submitting.
			      </div>
			    </div>
			  </div>
			  <button class="btn btn-primary" name="enviar" type="submit" id="send">Submit form</button>
			</form>
		</div>
		
	</div>
</div>

<script src="validar.js"></script>