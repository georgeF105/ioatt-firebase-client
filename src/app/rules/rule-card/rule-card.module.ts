import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuleCardComponent } from './rule-card.component';
import { MdCardModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { RuleDetailModule } from 'app/rules/rule-detail/rule-detail.module';

@NgModule({
  imports: [
    CommonModule,
    RuleDetailModule,
    MdCardModule,
    MdIconModule
  ],
  declarations: [RuleCardComponent],
  exports: [RuleCardComponent]
})
export class RuleCardModule { }
