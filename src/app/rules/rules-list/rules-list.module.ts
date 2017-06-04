import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RulesListComponent } from './rules-list.component';
import { RuleCardModule } from '../rule-card/rule-card.module';

@NgModule({
  imports: [
    CommonModule,
    RuleCardModule
  ],
  declarations: [RulesListComponent]
})
export class RulesListModule { }
