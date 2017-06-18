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
  @Input() public isGroupTop: boolean;
  @Input() public isGroupBottom: boolean;
  @Output() public saveCondition = new EventEmitter();

  public onChange () {
    this.saveCondition.emit();
  }

  public toggleDay (day: string) {
    this.condition[day] = !this.condition[day];
    this.onChange();
  }
}
