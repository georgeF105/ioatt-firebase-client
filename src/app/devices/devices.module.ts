import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { AllDevicesComponent } from './all-devices/all-devices.component';
import { DevicesComponent } from './devices.component';
import { DeviceCardComponent } from './device-card/device-card.component';

@NgModule({
  imports: [
    CommonModule,
    DevicesRoutingModule
  ],
  declarations: [AllDevicesComponent, DevicesComponent, DeviceCardComponent]
})
export class DevicesModule { }
