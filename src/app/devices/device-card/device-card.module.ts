import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceCardComponent } from './device-card.component';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [DeviceCardComponent],
  exports: [DeviceCardComponent]
})
export class DeviceCardModule { }
