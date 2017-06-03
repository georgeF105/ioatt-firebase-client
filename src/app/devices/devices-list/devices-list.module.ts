import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesListComponent } from './devices-list.component';
import { DeviceCardComponent } from 'app/devices/device-card/device-card.component';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    DevicesListComponent,
    DeviceCardComponent
  ],
  exports: [DevicesListComponent]
})
export class DevicesListModule { }
