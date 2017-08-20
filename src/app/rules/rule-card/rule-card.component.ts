import { Component, OnInit, Input } from '@angular/core';
import { IRule } from 'app/models';

@Component({
  selector: 'app-rule-card',
  templateUrl: './rule-card.component.html',
  styleUrls: ['./rule-card.component.scss']
})
export class RuleCardComponent implements OnInit {
  @Input() rule: IRule;

  constructor() { }

  ngOnInit() {
  }

}
