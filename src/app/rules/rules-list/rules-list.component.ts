import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IRule } from '../../models';
import { RulesService } from '../rules.service';

@Component({
  selector: 'app-rules-list',
  templateUrl: './rules-list.component.html',
  styleUrls: ['./rules-list.component.scss']
})
export class RulesListComponent implements OnInit {
  public rules$: Observable<IRule[]>;
  constructor(
    private rulesService: RulesService
  ) { }

  ngOnInit() {
    this.rules$ = this.rulesService.getRules();
  }

}
