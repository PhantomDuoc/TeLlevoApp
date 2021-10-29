import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: String;
  loginForm: FormGroup;

  constructor(
    public toastController: ToastController,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      user: [null, [Validators.required]],
      password: [null, Validators.required],
    });
  }

  ionViewWillEnter(){
    this.loginForm.reset();
  }

  submit(){
    if(!this.loginForm.valid){
      return;
    }
    let navigationExtras: NavigationExtras = {
      state: {user: this.user},
    };
    this.presentToast('Bienvenido '+this.user);
    this.router.navigate(['/home'], navigationExtras);
    console.log(this.loginForm.value);
  }

  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }

}
