import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RulesRoutingModule } from './rules-routing.module';
import { RulesService } from './rules.service';
import { RulesListModule } from './rules-list/rules-list.module';

@NgModule({
  imports: [
    CommonModule,
    RulesRoutingModule,
    RulesListModule
  ],
  providers: [RulesService]
})
export class RulesModule { }
