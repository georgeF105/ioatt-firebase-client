import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class RulesService {

  constructor(
    private angularFireDatabase: AngularFireDatabase
  ) { }

  public getRules() {
    return this.angularFireDatabase.list('rules');
  }
}
