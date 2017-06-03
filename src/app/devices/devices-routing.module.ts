import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesComponent } from 'app/devices/devices.component';
import { DevicesListComponent } from 'app/devices/devices-list/devices-list.component';

const routes: Routes = [
  {
    path: '',
    component: DevicesComponent,
    children: [
      {
        path: '',
        component: DevicesListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule { }
