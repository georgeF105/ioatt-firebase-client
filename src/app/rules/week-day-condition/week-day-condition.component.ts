import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITimeRuleCondition } from 'app/models';
import { IWeekDayRuleCondition } from 'app/models/IWeekDayRuleCondition';

@Component({
  selector: 'app-week-day-condition',
  templateUrl: './week-day-condition.component.html',
  styleUrls: ['./week-day-condition.component.scss']
})
export class WeekDayConditionComponent {
  @Input() public condition: IWeekDayRuleCondition;
  @Output() public saveCondition = new EventEmitter();

  public onChange () {
    console.log('saving', this.condition);
    this.saveCondition.emit();
  }

  public toggleDay (day: string) {
    this.condition[day] = !this.condition[day];
    this.onChange();
  }
}
