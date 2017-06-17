import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { IRule } from 'app/models';

@Injectable()
export class RulesService {

  constructor(
    private angularFireDatabase: AngularFireDatabase
  ) { }

  public getRules() {
    return this.angularFireDatabase.list('rules');
  }

  public saveRule(rule: IRule): void {
    this.angularFireDatabase.object(`rules/${rule.$key}`).set(rule);
  }

  public getDevicesRule (deviceKey: string) {
    return this.angularFireDatabase.list('rules', {
      query: {
        orderByChild: 'linkedDeviceKey',
        equalTo: deviceKey
      }
    });
  }
}
