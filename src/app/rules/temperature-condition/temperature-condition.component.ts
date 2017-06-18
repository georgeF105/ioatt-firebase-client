import { Component, OnInit, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { ITemperatureRuleCondition } from 'app/models';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

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

  constructor(
    private iconRegistry: MdIconRegistry,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.iconRegistry.addSvgIcon(
        'thermometer',
        this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/thermometer.svg'));
  }

  public onChange () {
    this.saveCondition.emit();
  }
}
