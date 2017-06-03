import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DevicesService {

  constructor(
    private angularFireDatabase: AngularFireDatabase
  ) { }
  public getAlDevices (): Observable<any> {
    return this.angularFireDatabase.list('devices');
  }

  public setDeviceState (key: string, state: boolean): void {
    this.angularFireDatabase.object(`devices/${key}`).update({ state: state, updatedByHost: true, updatedByDevice: false });
  }
}
