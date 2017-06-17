import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ITemperatureRuleCondition } from 'app/models';

@Component({
  selector: 'app-temperature-condition',
  templateUrl: './temperature-condition.component.html',
  styleUrls: ['./temperature-condition.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemperatureConditionComponent implements OnInit {
  @Input() public condition: ITemperatureRuleCondition;

  constructor() { }

  ngOnInit() {
  }

  public saveCondition () {
    console.log('saving');
  }
}
