import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ITimeRuleCondition } from 'app/models';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: [
    './time.component.scss',
    '../rule-condition.styles.scss'
  ]
})
export class TimeComponent {
  @Input() public condition: ITimeRuleCondition;
  @Output() public saveCondition = new EventEmitter();
}
