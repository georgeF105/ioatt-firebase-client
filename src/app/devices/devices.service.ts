import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { IRawDevice } from 'app/models';

@Injectable()
export class DevicesService {

  constructor(
    private angularFireDatabase: AngularFireDatabase
  ) { }
  public getAlDevices (): Observable<IRawDevice[]> {
    return this.angularFireDatabase.list('devices')
      .map(devices => devices.map(device => {
        return {
          ...device,
          id: device.$key
        };
      }));
  }

  public setDeviceState (key: string, state: boolean): void {
    this.angularFireDatabase.object(`devices/${key}`).update({ state: state, updatedByHost: true, updatedByDevice: false });
  }
}
