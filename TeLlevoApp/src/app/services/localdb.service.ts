/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Iusers } from '../interfaces/iusers';


@Injectable({
  providedIn: 'root',
})
export class LocaldbService {
  usersdb: Iusers[]=[];
  private _storage: Storage | null = null;
  constructor(private storage: Storage, private platform: Platform) {
    this.init();
    this.getUsers();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async getUsers(){
    const myUsers = await this.storage.get('users');
    if (myUsers) {
      this.usersdb = myUsers;
      return myUsers;
    }
  }