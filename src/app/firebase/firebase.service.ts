import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FirebaseService {
  public user$ = new BehaviorSubject(null);

  constructor(
    private af: AngularFire
  ) {
    af.auth.subscribe(auth => {
      if (auth) {
        this.user$.next({
          id: auth.uid,
          name: auth.google.displayName || auth.google.email
        });
      } else {
        this.user$.next(null);
      }
    });
  }

  public getAlDevices (): Observable<any> {
    return this.af.database.list('devices');
  }

  public setDeviceState (key: string, state: boolean): void {
    this.af.database.object(`devices/${key}`).update({ state: state, updated: true });
  }

  public logIn(): void {
    this.af.auth.login();
  }

  public logOut(): void {
    this.af.auth.logout();
  }
}
