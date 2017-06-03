import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { DevicesListComponent } from './devices-list.component';
import { DeviceCardModule } from '../device-card/device-card.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    DeviceCardModule
  ],
  declarations: [
    DevicesListComponent
  ],
  exports: [DevicesListComponent]
})
export class DevicesListModule { }
