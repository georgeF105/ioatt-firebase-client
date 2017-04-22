import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService {

  constructor(
    private af: AngularFire
  ) {
  }

  public getAlDevices (): Observable<any> {
    return this.af.database.list('devices');
  }

  public setDeviceState (key: string, state: boolean): void {
    this.af.database.object(`devices/${key}`).update({ state: state, updated: true });
  }
}
