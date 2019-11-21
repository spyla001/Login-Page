import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup ;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  get username() { 
    return this.loginForm.get('username')
  }
  
  get password() { 
    return this.loginForm.get('password')
  }

  ngOnInit() {
    
  }

  onSubmit(){

    let LoginData = this.loginForm.value;
    const authVerify = this.authService.Login(LoginData);
  
    if(authVerify.error) {
      window.alert(authVerify.error);
    }
    else{
      return this.router.navigate(["/tabledata"]);  
    }
   }



}
