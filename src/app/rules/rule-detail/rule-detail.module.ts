import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RuleDetailComponent } from './rule-detail.component';
import { MdCardModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { RuleConditionModule } from 'app/rules/rule-condition/rule-condition.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RuleConditionModule,
    MdCardModule,
    MdIconModule
  ],
  declarations: [RuleDetailComponent],
  exports: [RuleDetailComponent]
})
export class RuleDetailModule { }
