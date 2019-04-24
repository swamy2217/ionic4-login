import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = "auth-Token";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticateState = new BehaviorSubject(false);

  constructor(
    private storage: Storage,
    private platform: Platform
    ) {
      this.platform.ready().then(res => {
        this.checkToken();
      })
     }

    public login(){
      return this.storage.set(TOKEN_KEY, 'Bearer 123456').then(res => {
        this.authenticateState.next(true);
      })
    }

    logout(){
      this.storage.remove(TOKEN_KEY).then(() => {
        this.authenticateState.next(false);
      })

    }

    isAuthenticated(){
      return this.authenticateState.value;
    }

    checkToken(){
      this.storage.get(TOKEN_KEY).then(res => {
        if(res){
          this.authenticateState.next(true);
        }
      })
    }

}
