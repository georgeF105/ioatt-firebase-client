import { Component, Input, ChangeDetectionStrategy, SimpleChanges, OnInit } from '@angular/core';
import { DevicesService } from '../devices.service';
import { IRawDevice, IRule } from 'app/models';
import { RulesService } from 'app/rules/rules.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeviceCardComponent implements OnInit {
  @Input() device: IRawDevice;

  public deviceRule$: Observable<IRule>;

  constructor(
    private devicesService: DevicesService,
    private rulesService: RulesService
  ) { }

  public ngOnInit () {
    this.deviceRule$ = this.rulesService.getDevicesRule(this.device.id).map(rules => rules[0]);
  }

  public toggleDeviceState(): void {
    this.devicesService.setDeviceState(this.device.id, !this.device.state);
  }

  public setDeviceState(state: boolean): void {
    this.devicesService.setDeviceState(this.device.id, state);
  }

}
