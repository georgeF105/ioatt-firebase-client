import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IWeekDayRuleCondition } from 'app/models/IWeekDayRuleCondition';

@Component({
  selector: 'app-week-day',
  templateUrl: './week-day.component.html',
  styleUrls: [
    './week-day.component.css',
    '../rule-condition.styles.scss'
  ]
})
export class WeekDayComponent {
  @Input() public condition: IWeekDayRuleCondition;
  @Output() public saveCondition = new EventEmitter();

  public toggleDay (day: string) {
    this.condition[day] = !this.condition[day];
    this.saveCondition.emit();
  }

}
