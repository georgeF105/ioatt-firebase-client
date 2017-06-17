import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuleDetailComponent } from './rule-detail.component';
import { MdCardModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { TemperatureConditionModule } from 'app/rules/temperature-condition/temperature-condition.module';
import { TimeConditionModule } from 'app/rules/time-condition/time-condition.module';

@NgModule({
  imports: [
    CommonModule,
    TemperatureConditionModule,
    TimeConditionModule,
    MdCardModule,
    MdIconModule
  ],
  declarations: [RuleDetailComponent],
  exports: [RuleDetailComponent]
})
export class RuleDetailModule { }
