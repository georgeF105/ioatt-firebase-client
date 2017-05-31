import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'devices',
    loadChildren: 'app/devices/devices.module#DevicesModule'
  },
  {
    path: '**',
    redirectTo: 'devices'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
