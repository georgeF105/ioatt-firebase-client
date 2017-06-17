import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TemperatureConditionComponent } from './temperature-condition.component';
import { MdCardModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdChipsModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdCardModule,
    MdIconModule,
    MdInputModule,
    MdChipsModule,
    MdButtonModule
  ],
  declarations: [
    TemperatureConditionComponent
  ],
  exports: [
    TemperatureConditionComponent
  ]
})
export class TemperatureConditionModule { }
