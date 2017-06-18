import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IRule } from 'app/models';
import { RulesService } from 'app/rules/rules.service';
import { IRuleCondition } from 'app/models/IRuleCondition';

@Component({
  selector: 'app-rule-detail',
  templateUrl: './rule-detail.component.html',
  styleUrls: ['./rule-detail.component.scss']
})
export class RuleDetailComponent implements OnChanges {
  @Input() public rule: IRule;

  public conditionsGroupPosition: Array<{ isGroupTop: boolean, isGroupBottom: boolean }> = [];

  constructor(
    private rulesService: RulesService
  ) { }

  ngOnChanges (changes: SimpleChanges) {
    const { rule } = changes;
    if (rule && rule.currentValue) {
      this.setConditionsGroupPositions();
    }
  }

  public saveRule (): void {
    this.rulesService.saveRule(this.rule);
  }

  public setConditionsGroupPositions () {
    this.conditionsGroupPosition = (this.rule.conditions || []).map((condition, index, conditions) => {
      return {
        isGroupTop: index === 0
          || condition.logicOperator === 'or'
          || condition.logicOperator === 'xor',
        isGroupBottom: !conditions[index + 1]
          || conditions[index + 1].logicOperator === 'or'
          || conditions[index + 1].logicOperator === 'xor'
      };
    });
  }

  public trackByKey (index, item) {
    return index;
  }
}
