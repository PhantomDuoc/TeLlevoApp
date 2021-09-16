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
    public ToastController: ToastController,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      user: [null, [Validators.required]],
      password: [null, Validators.required],
    });
  }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }
    //declaro e instancio un objeto de tipo NavigationExtras
    let navigationextras: NavigationExtras = {
      state: { user: this.user }, //asigno obj con clave y valor
    };
    //Ingresara a la page Home, usando la API Router para llamar a otra page+parametro
    this.presentToast('Bienvenido ' + this.user);
    this.router.navigate(['/home'], navigationextras);
    console.log(this.loginForm.value);
  }

  crearCuenta(){
    this.router.navigate(['/crear-cuenta'])
  }

  restablecer() {
    this.router.navigate(['/restablecer']);
  }

  async presentToast(msg:string) {
    const toast = await this.ToastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }
}
