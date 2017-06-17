import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekDayConditionComponent } from './week-day-condition.component';
import { FormsModule } from '@angular/forms';
import { MdCardModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdTooltipModule } from '@angular/material';
import { MdButtonToggleModule } from '@angular/material';

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
  declarations: [WeekDayConditionComponent],
  exports: [WeekDayConditionComponent]
})
export class WeekDayConditionModule { }
