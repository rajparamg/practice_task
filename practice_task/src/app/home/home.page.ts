import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  user:any={
    id:1,userName:'admin',fullName:''
  }
  page:string="home"
  constructor(private router:Router) {}
  ngOnInit(){
  console.log(localStorage.getItem('token'))
    this.user.userName=localStorage.getItem('userName');
    if (this.user && this.user.userName) {
      this.user.fullName=this.user.userName.split("@")[0]
      }
    console.log(this.user)
  }
  backToHome() {
    console.log('Home icon clicked');
  }
  signOut(){
    this.router.navigate(['./login'])
    localStorage.removeItem("userName");
    localStorage.removeItem("token");
    this.user={
      id:0,userName:'',fullName:''
    };
    
  }
}
