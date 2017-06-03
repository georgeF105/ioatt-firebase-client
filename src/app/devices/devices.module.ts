import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesComponent } from './devices.component';
import { DeviceCardComponent } from './device-card/device-card.component';
import { MaterialModule } from '@angular/material';
import { DevicesService } from './devices.service';
import { DevicesListModule } from './devices-list/devices-list.module';

@NgModule({
  imports: [
    CommonModule,
    DevicesRoutingModule,
    MaterialModule,
    DevicesListModule
  ],
  declarations: [
    DevicesComponent
  ],
  providers: [DevicesService]
})
export class DevicesModule { }
