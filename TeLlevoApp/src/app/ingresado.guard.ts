import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
<<<<<<< HEAD
=======
import { NavController } from '@ionic/angular';
>>>>>>> development-hugo
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngresadoGuard implements CanActivate {
<<<<<<< HEAD
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
=======
  constructor(
    public navCtrl: NavController
    ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(localStorage.getItem('ingresado')){
        return true;
      }else{
        this.navCtrl.navigateRoot('login');
        return false;
      }
>>>>>>> development-hugo
  }
  
}
