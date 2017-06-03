import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceCardComponent } from './device-card.component';
import { MaterialModule } from '@angular/material';
import { ToggleButtonModule } from '../../core/toggle-button/toggle-button.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ToggleButtonModule
  ],
  declarations: [DeviceCardComponent],
  exports: [DeviceCardComponent]
})
export class DeviceCardModule { }
