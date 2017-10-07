import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuleConditionComponent } from './rule-condition.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { TimeComponent } from './time/time.component';
import { WeekDayComponent } from './week-day/week-day.component';

import { MdCardModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdTooltipModule } from '@angular/material';
import { MdButtonToggleModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdCardModule,
    MdIconModule,
    MdInputModule,
    MdButtonModule,
    MdTooltipModule,
    MdButtonToggleModule
  ],
  declarations: [RuleConditionComponent, TemperatureComponent, TimeComponent, WeekDayComponent],
  exports: [RuleConditionComponent]
})
export class RuleConditionModule { }
