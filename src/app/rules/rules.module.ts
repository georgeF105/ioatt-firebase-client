import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RulesRoutingModule } from './rules-routing.module';
import { RulesListComponent } from './rules-list/rules-list.component';
import { RulesService } from './rules.service';

@NgModule({
  imports: [
    CommonModule,
    RulesRoutingModule
  ],
  declarations: [RulesListComponent],
  providers: [RulesService]
})
export class RulesModule { }
