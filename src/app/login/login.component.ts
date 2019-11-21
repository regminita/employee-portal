import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'; 
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  formSubmitted = false;
  authenticated = true;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm  = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  
  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }

  login() {
    this.formSubmitted = true;
    if(this.loginForm.invalid) {
      return;
    }
    
    this.authService.login(this.loginForm.value).subscribe((response) => {
      if(response) {
        this.authenticated = true;
        this.router.navigate(['employees']); 

      }else{
        this.authenticated = false;
      }

    });
    
  }

  isLoggedIn() { 
    return false;
  }
}
