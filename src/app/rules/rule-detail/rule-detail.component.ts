import { Component, OnInit, Input } from '@angular/core';
import { IRule } from 'app/models';

@Component({
  selector: 'app-rule-detail',
  templateUrl: './rule-detail.component.html',
  styleUrls: ['./rule-detail.component.scss']
})
export class RuleDetailComponent implements OnInit {
  @Input() public rule: IRule;

  constructor() { }

  ngOnInit() {
  }

  public saveRule (): void {
    console.log('save rule', this.rule);
  }
}
