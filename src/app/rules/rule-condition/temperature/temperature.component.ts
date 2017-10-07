import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITemperatureRuleCondition } from 'app/models';
import { Observable } from 'rxjs/Observable';
import { RulesService } from 'app/rules/rules.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: [
    './temperature.component.scss',
    '../rule-condition.styles.scss'
  ]
})
export class TemperatureComponent implements OnInit {
  @Input() public condition: ITemperatureRuleCondition;
  @Output() public saveCondition = new EventEmitter();

  public actualValue$: Observable<number>;

  constructor(
    private rulesService: RulesService
  ) { }

  ngOnInit() {
    this.actualValue$ = this.rulesService.getRuleSensorValue(this.condition);
  }

}
