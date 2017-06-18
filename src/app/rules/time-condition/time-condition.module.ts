import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TimeConditionComponent } from './time-condition.component';
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
  declarations: [TimeConditionComponent],
  exports: [TimeConditionComponent]
})
export class TimeConditionModule { }
