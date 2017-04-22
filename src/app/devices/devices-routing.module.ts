import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesComponent } from 'app/devices/devices.component';
import { AllDevicesComponent } from 'app/devices/all-devices/all-devices.component';

const routes: Routes = [
  {
    path: '',
    component: DevicesComponent,
    children: [
      {
        path: '',
        component: AllDevicesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule { }
