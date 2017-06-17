import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuleCardComponent } from './rule-card.component';
import { MdCardModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { TemperatureConditionModule } from '../temperature-condition/temperature-condition.module';

@NgModule({
  imports: [
    CommonModule,
    TemperatureConditionModule,
    MdCardModule,
    MdIconModule
  ],
  declarations: [RuleCardComponent],
  exports: [RuleCardComponent]
})
export class RuleCardModule { }
