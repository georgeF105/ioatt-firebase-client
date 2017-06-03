import { Component, OnInit, Input } from '@angular/core';
import { DevicesService } from '../devices.service';
import { IRawDevice } from 'app/models';

@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.scss']
})
export class DeviceCardComponent implements OnInit {
  @Input() device: IRawDevice;

  constructor(
    private devicesService: DevicesService
  ) { }

  ngOnInit() {
  }

  public toggleDeviceState(): void {
    this.devicesService.setDeviceState(this.device.id, !this.device.state);
  }

}
