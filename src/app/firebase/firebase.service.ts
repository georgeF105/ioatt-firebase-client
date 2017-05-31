import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebaseService {
  public user$ = new BehaviorSubject(null);

  constructor(
    private angularFireDatabase: AngularFireDatabase,
    private angularFireAuth: AngularFireAuth
  ) {
    angularFireAuth.authState.subscribe(auth => {
      if (auth) {
        this.user$.next({
          id: auth.uid,
          name: auth.displayName || auth.email
        });
      } else {
        this.user$.next(null);
      }
    });
  }

  public getAlDevices (): Observable<any> {
    return this.angularFireDatabase.list('devices');
  }

  public setDeviceState (key: string, state: boolean): void {
    this.angularFireDatabase.object(`devices/${key}`).update({ state: state, updated: true });
  }

  public logIn(): void {
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  public logOut(): void {
    this.angularFireAuth.auth.signOut();
  }
}
