import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceCardComponent } from './device-card.component';
import { MaterialModule } from '@angular/material';
import { ToggleButtonModule } from '../../core/toggle-button/toggle-button.module';
import { RuleDetailModule } from 'app/rules/rule-detail/rule-detail.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ToggleButtonModule,
    RuleDetailModule
  ],
  declarations: [DeviceCardComponent],
  exports: [DeviceCardComponent]
})
export class DeviceCardModule { }
