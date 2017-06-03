import { Component, Input, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { DevicesService } from '../devices.service';
import { IRawDevice } from 'app/models';

@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeviceCardComponent {
  @Input() device: IRawDevice;

  constructor(
    private devicesService: DevicesService
  ) { }

  public toggleDeviceState(): void {
    this.devicesService.setDeviceState(this.device.id, !this.device.state);
  }

  public setDeviceState(state: boolean): void {
    this.devicesService.setDeviceState(this.device.id, state);
  }

}
