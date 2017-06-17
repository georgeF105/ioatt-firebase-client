import { Component, OnInit, Input } from '@angular/core';
import { IRule } from 'app/models';
import { RulesService } from 'app/rules/rules.service';

@Component({
  selector: 'app-rule-detail',
  templateUrl: './rule-detail.component.html',
  styleUrls: ['./rule-detail.component.scss']
})
export class RuleDetailComponent implements OnInit {
  @Input() public rule: IRule;

  constructor(
    private rulesService: RulesService
  ) { }

  ngOnInit() {
  }

  public saveRule (): void {
    console.log('save rule', this.rule);
    this.rulesService.saveRule(this.rule);
  }

  public trackByKey (index, item) {
    // TODO make this work
    return item.type;
  }
}
