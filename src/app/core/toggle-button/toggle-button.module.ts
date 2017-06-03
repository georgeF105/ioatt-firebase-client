import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { ToggleButtonComponent } from 'app/core/toggle-button/toggle-button.component';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdIconModule
  ],
  declarations: [ToggleButtonComponent],
  exports: [ToggleButtonComponent]
})
export class ToggleButtonModule { }
