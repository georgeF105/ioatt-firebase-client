import { Component, OnInit, Input, ChangeDetectionStrategy, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { ITemperatureRuleCondition } from 'app/models';
import { RulesService } from 'app/rules/rules.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-temperature-condition',
  templateUrl: './temperature-condition.component.html',
  styleUrls: ['./temperature-condition.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemperatureConditionComponent implements OnInit {
  @Input() public condition: ITemperatureRuleCondition;
  @Input() public isGroupTop: boolean;
  @Input() public isGroupBottom: boolean;
  @Output() public saveCondition = new EventEmitter();

  public actualValue$: Observable<number>;

  public settingsActive: boolean;

  constructor(
    private rulesService: RulesService
  ) { }

  ngOnInit() {
    this.actualValue$ = this.rulesService.getRuleSensorValue(this.condition);
  }

  public onChange () {
    this.saveCondition.emit();
  }

  public deleteCondition () {
    alert('DELETE. NOT FINISHED');
  }
}
