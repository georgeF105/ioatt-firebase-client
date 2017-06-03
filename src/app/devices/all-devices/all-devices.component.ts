import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DevicesService } from '../devices.service';

@Component({
  selector: 'app-all-devices',
  templateUrl: './all-devices.component.html',
  styleUrls: ['./all-devices.component.scss']
})
export class AllDevicesComponent implements OnInit {
  public devices$: Observable<any>;

  constructor(
    private devicesService: DevicesService
  ) { }

  ngOnInit() {
    this.devices$ = this.devicesService.getAlDevices();
  }

}
