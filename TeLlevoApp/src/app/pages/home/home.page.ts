import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Time } from '@angular/common';
import { ViajesService } from 'src/app/services/viajes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  user: any;
  type: String;
  users: any;
  posts:any;
  post:any={
    id:null,
    title:"",
    body:"",
    userId:null,
  };
  compareWith:any;
  viajeForm: FormGroup;

  constructor(
    public ToastController: ToastController,
    private ActivatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    public navCtrl: NavController,
    public alertController: AlertController,
    private api: ViajesService,
  ) {
     //llamar a la ruta activa y obtener sus parámetros (si es que tiene)
     this.ActivatedRoute.queryParams.subscribe((params) => {
      //utilizamos lambda
      if (this.router.getCurrentNavigation().extras.state) {
        this.user = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.user);
      }
    });
   }

  ngOnInit() {
    this.type = 'home';
    this.viajeForm = this.formBuilder.group({
      destino: [null, [Validators.required]],
      tarifa: [null, [Validators.required]],
      hora: [null, [Validators.required]],
      /* fecha: [null, [Validators.required]], */
    });
  }

  ionViewWillEnter(){
    this.getUsuarios();
    this.getPosts();
  }

  getPosts() {
    this.api.getPosts().subscribe((data) =>{
      this.posts=data;
      this.posts.reverse();
    });
  }

  getUsuarios() {
    this.api.getUsuarios().subscribe((data)=>{
      this.users=data;
    })
  }

  guardarViaje(){
    if (this.post.userId==null) {
      if (this.user==undefined) {
        this.presentToast("Debe seleccionar un conductor")
        return;
      }
      this.post.userId=this.user.id;
      this.api.createPost(this.post).subscribe(
        ()=>{
          this.presentToast("Viaje creado con éxito");
          this.getPosts();
          this.type='home';
        },
        error=>{
          this.presentToast("Error - "+error)
        }
      );
    } else{
      this.api.updatePost(this.post.id, this.post).subscribe(
        ()=>{
          this.presentToast("Viaje actualizado con éxito");
          this.getPosts();
          this.type='home';
        },
        error=>{
          this.presentToast("Error - "+error)
        }
      )

    }
  }

  setPost(post){
    this.post=post;
    this.getUsuario(post.userId);
    this.compareWith=this.compareWithFn;
  }

  getUsuario(userId: any) {
    this.api.getUsuario(userId).subscribe((data)=>{
      this.user=data;
    })
  }

  eliminarPost(post){
    this.api.deletePost(post.id).subscribe(
      success=>{
        this.presentToast("Viaje eliminado con éxito")
        this.getPosts();
      },
      error=>{
        this.presentToast("Error - "+error)
      }
    )
  }

  compareWithFn = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

  segmentChanged(ev: any){
    console.log('Segment changed', ev);
    this.getPosts();
  }

  async presentToast(msg: string) {
    const toast = await this.ToastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }

  async atras(){
    const alert = await this.alertController.create({
      header:'Sesión terminada',
      message:'Muchas gracias por utilizar Te llevo App.',
      buttons: ['Ok']
    });

    await alert.present();
    localStorage.removeItem('ingresado');
    this.navCtrl.navigateRoot('login');
    return;
  }
}
