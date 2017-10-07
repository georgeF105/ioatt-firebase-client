import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { IRule, ITemperatureRuleCondition } from 'app/models';
import { Observable } from 'rxjs/Observable';

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

  public getRuleSensorValue (rule: ITemperatureRuleCondition): Observable<number> {
    return this.angularFireDatabase.object(`sensors/${rule.sensorKey}/data`)
      .map(data => data[rule.sensorDataKey]);
  }
}
