import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  public registrationForm: any

  constructor() {
    this.registrationForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      userFullName: new FormControl('', Validators.required),
      contactNumber: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
   }

  ngOnInit() {
  }
  async registerUser() {//signUp Form
    console.log(this.registrationForm)
    let userName = this.registrationForm.value.userName;
    let userFullName = this.registrationForm.value.userFullName;
    let contactNumber = this.registrationForm.value.contactNumber;
    let password = this.registrationForm.value.password;
    // setTimeout(() => {
    //   this.authStore.dispatch(
    //     AuthActions.getUserActions(),
    //   );
    // }, 1000);
    // this.registrationForm.reset();
  }

  signIn(){
    
  }
  async onPasswordkeyPress(evt:any) {
    if (evt.keyCode === 13) {
      this.signIn();
    }
  }
}
