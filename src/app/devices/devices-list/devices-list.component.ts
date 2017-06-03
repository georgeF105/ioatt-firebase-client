import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../devices.service';
import { Observable } from 'rxjs/Observable';
import { IRawDevice } from 'app/models';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.scss']
})
export class DevicesListComponent implements OnInit {
  public devices$: Observable<IRawDevice[]>;

  constructor(
    private devicesService: DevicesService
  ) { }

  ngOnInit() {
    this.devices$ = this.devicesService.getAlDevices();
  }

}
