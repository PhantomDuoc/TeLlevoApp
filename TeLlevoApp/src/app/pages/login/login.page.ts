import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: String;
  type: String;
  loginForm: FormGroup;
  createForm: FormGroup;
  resetForm: FormGroup;
  correo: String;

  constructor(
    public toastController: ToastController,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.type = 'login';
    this.loginForm = this.formBuilder.group({
      user: [null, [Validators.required]],
      password: [null, Validators.required],
    });
    this.createForm =this.formBuilder.group({
      user: [null, [Validators.required]],
      password: [null, Validators.required],
      /* correo: [null, Validators.required], */
    });
    this.resetForm = this.formBuilder.group({
      correo: [null, Validators.required]
    });
  }

  ionViewWillEnter(){
    this.loginForm.reset();
  }

  restablecer() {
    if (!this.resetForm.valid) {
      return;
    }
    //declaro e instancio un objeto de tipo NavigationExtras
    let navigationextras: NavigationExtras = {
      state: { user: this.correo }, //asigno obj con clave y valor
    };
    //Ingresara a la page Home, usando la API Router para llamar a otra page+parametro
    this.presentToast(
      'Instrucciones de reestablecimiento enviado exitosamente a ' + this.correo
    );
    this.atras();
    console.log(this.resetForm.value);
  }

  crear(){
    if (!this.createForm.valid) {
      return;
    }
    /* //declaro e instancio un objeto de tipo NavigationExtras
    let navigationextras: NavigationExtras = {
      state: { user: this.correo }, //asigno obj con clave y valor
    }; */
    //Ingresara a la page Home, usando la API Router para llamar a otra page+parametro
    this.presentToast(
      'Código de verificación enviado exitosamente a '
      );
    this.type='login';
    console.log(this.createForm.value);
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

  changeCreate(){
    this.type='create'
  }

  changeReset(){
    this.type='reset'
  }

  segmentChanged(ev: any){
    console.log('Segment changed', ev);
  }

  atras(){
    this.type='login'
  }

  
}
