import { Component, OnInit, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { ITemperatureRuleCondition } from 'app/models';

@Component({
  selector: 'app-temperature-condition',
  templateUrl: './temperature-condition.component.html',
  styleUrls: ['./temperature-condition.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemperatureConditionComponent implements OnInit {
  @Input() public condition: ITemperatureRuleCondition;
  @Output() public saveCondition = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('Initing', this.condition);
  }

  public onChange () {
    console.log('saving');
    this.saveCondition.emit();
  }
}
