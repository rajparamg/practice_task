import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm: any

  constructor(private router:Router) {
    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
   }

  ngOnInit() {
  }
  setEmailValidator(){
    this.loginForm.get('userName').setValidators(Validators.email);  
}
  async signIn() {
    console.log(this.loginForm)
    let userName = this.loginForm.value.userName;
    let password = this.loginForm.value.password;
    localStorage.setItem('userName',userName);
    localStorage.setItem('password',password);
    localStorage.setItem('token','ejk1ssjhj6688valid');
    this.router.navigate(['/home']);
    // setTimeout(() => {
    //   this.authStore.dispatch(
    //     AuthActions.getUserActions(),
    //   );
    // }, 1000);
    setTimeout(() => {
    this.loginForm.reset();
    }, 500);
  }

  signUp(){

  }
  async onPasswordkeyPress(evt:any) {
    if (evt.keyCode === 13) {
      this.signIn();
    }
  }
}
