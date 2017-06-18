import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITimeRuleCondition } from 'app/models';

@Component({
  selector: 'app-time-condition',
  templateUrl: './time-condition.component.html',
  styleUrls: ['./time-condition.component.scss']
})
export class TimeConditionComponent {
  @Input() public condition: ITimeRuleCondition;
  @Input() public isGroupTop: boolean;
  @Input() public isGroupBottom: boolean;
  @Output() public saveCondition = new EventEmitter();

  public onChange () {
    this.saveCondition.emit();
  }
}
