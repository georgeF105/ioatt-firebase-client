import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IRuleCondition } from 'app/models/IRuleCondition';

@Component({
  selector: 'app-rule-condition',
  templateUrl: './rule-condition.component.html',
  styleUrls: [
    './rule-condition.component.scss',
    './rule-condition.styles.scss'
  ]
})
export class RuleConditionComponent implements OnInit {
  @Input() public condition: IRuleCondition;
  @Input() public isGroupTop: boolean;
  @Input() public isGroupBottom: boolean;
  @Output() public saveCondition = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public saveRule () {
    this.saveCondition.emit();
  }

}
