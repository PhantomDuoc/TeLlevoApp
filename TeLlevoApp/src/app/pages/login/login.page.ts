import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: String;
  type: String;
  loginForm: FormGroup;
  createForm: FormGroup;
  resetForm: FormGroup;
  correo: String;

  constructor(
    public toastController: ToastController,
    private router: Router,
    private formBuilder: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.type = 'login';
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, Validators.required],
    });
    this.createForm =this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, Validators.required],
    });
    this.resetForm = this.formBuilder.group({
      correo: [null, Validators.required]
    });
  }

  ionViewWillEnter(){
    this.loginForm.reset();
  }

  async crearCuenta(){
    var formulario = this.createForm.value;

    if(this.createForm.invalid){
      const alert = await this.alertController.create({
        header:'Datos erróneos',
        message:'Datos ingresados incorrectamente, por favor corrígelos.',
        buttons: ['Ok']
      });

      await alert.present();
      return;
    }

    var account = {
      username: formulario.username,
      password: formulario.password,
    }

    var verificacion = JSON.parse(localStorage.getItem('account'));

    if((verificacion.username == formulario.username) && (verificacion.password == formulario.password)){
      const alert = await this.alertController.create({
        header:'Cuenta no creada',
        message:'Ya existe una cuenta con el usuario '+verificacion.username+', por favor intenta con otro.',
        buttons: ['Ok']
      });
      await alert.present();
      return;
    }

    localStorage.setItem('account', JSON.stringify(account));

    const alert = await this.alertController.create({
      header:'Cuenta creada',
      message:'¡Bienvenido '+account.username+' a tu nueva solución de transporte!',
      buttons: ['Ok']
    });
    await alert.present();
    this.atras();
  }

  async ingresar(){
    var formulario = this.loginForm.value;
    var account = JSON.parse(localStorage.getItem('account'));

    if(this.loginForm.invalid){
      const alert = await this.alertController.create({
        header:'Datos incompletos',
        message:'Los datos ingresados están incompletos, por favor corrígelos.',
        buttons: ['Ok']
      });

      await alert.present();
      return;
    }

    if((account.username == formulario.username) && (account.password == formulario.password)){
      const alert = await this.alertController.create({
        header:'Bienvenido',
        message:'Recuerda ser respetuoso, todos somos seres humanos.',
        buttons: ['Ok']
      });
      await alert.present();
      console.log('ingresado');
      localStorage.setItem('ingresado','true');
      this.navCtrl.navigateRoot('home');
      return;
    }else{
      const alert = await this.alertController.create({
        header:'Datos incorrectos',
        message:'Los datos ingresados no corresponden a ninguna cuenta registrada.',
        buttons: ['Ok']
      });

      await alert.present();
      return;
    }
  }

  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }

  changeCreate(){
    this.loginForm.reset();
    this.type='create'
  }

  changeReset(){
    this.loginForm.reset();
    this.type='reset'
  }

  segmentChanged(ev: any){
    console.log('Segment changed', ev);
  }

  atras(){
    this.type='login';
    this.loginForm.reset();
    this.createForm.reset();
    this.resetForm.reset();
  }
}
