import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, MinLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;
  loginForm: FormGroup;
  submitted = false;
  errorMesg;

  constructor( private formBuilder: FormBuilder,  // still not sure why is this here and what does it mean
    private router: Router,
    private authService: AuthService) {
    this.registerForm = this.formBuilder.group({
      firstName :['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['',[Validators.required]],
      confirmPassword: ['', Validators.required]
    });
   }

  get firstName() { 
    return this.registerForm.get('firstName')
  }
  
  get lastName() { 
    return this.registerForm.get('lastName')
  }

  get username() { 
    return this.registerForm.get('username')
  }
  
  get email() { 
     return this.registerForm.get('email')
  }

  get password() { 
    return this.registerForm.get('password')
  }

  get confirmPassword() { 
    return this.registerForm.get('confirmPassword')
  }

  onRegister(){

    const pwd = this.registerForm.get('password').value;
    const matchPwd = this.registerForm.get('confirmPassword').value;
    
    if (pwd && matchPwd && pwd === matchPwd){                                                     // If all vadiations are checked 

      let userData = this.registerForm.value;                                                     // fetch all form values
      const authResult = this.authService.register(userData);                                     // assigning the return value of function in service to a readonly variable 
      if(authResult.error){                                                                       // if ti returns error, throws window alert
        window.alert(authResult.error);
      }else{                                                                                      // else it redirects to login page
        return this.router.navigate(['/login']);
      }
    }
     else {                                                                                       // If validators dont match
       // here set error message in local variable
      return this.errorMesg = 'password and confirm password not matched';                         // throw error message
    }
  }

  ngOnInit() {
    console.log(this.registerForm);
  }

}
