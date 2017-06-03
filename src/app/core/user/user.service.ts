import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { IUser } from 'app/models';

import 'rxjs/';

@Injectable()
export class UserService {
  private _user$: Observable<IUser>;

  constructor(
    private afAuth: AngularFireAuth
  ) {
    this._user$ = afAuth.authState
      .map((fbUser: firebase.User) => {
        return {
          id: fbUser.uid,
          name: fbUser.displayName,
          email: fbUser.email
        };
      });
  }

  public getUser(): Observable<IUser> {
    return this._user$;
  }

  public logIn(): void {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  public logOut(): void {
    this.afAuth.auth.signOut();
  }
}
