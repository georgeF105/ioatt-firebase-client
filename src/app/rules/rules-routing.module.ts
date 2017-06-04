import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RulesListComponent } from './rules-list/rules-list.component';

const routes: Routes = [
  {
    path: '',
    component: RulesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RulesRoutingModule { }
