import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  public registrationForm: any
  handlerMessage = '';
  roleMessage = '';
  constructor(private alertController: AlertController,
    private router:Router) {
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
    // this.presentAlert();
    setTimeout(() => {
      this.router.navigate(['/login'])
    this.registrationForm.reset();
    }, 1000);
    
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Your Account as created successfully',
      buttons: [
        // {
        //   text: 'Cancel',
        //   role: 'cancel',
        //   handler: () => {
        //     this.handlerMessage = 'Alert canceled';
        //   },
        // },
        {
          text: 'OK',
          // role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

  signIn(){
    
  }
  async onPasswordkeyPress(evt:any) {
    if (evt.keyCode === 13) {
      this.signIn();
    }
  }
}
