import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from 'app/firebase/firebase.service';

@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.scss']
})
export class DeviceCardComponent implements OnInit {
  @Input() device;

  constructor(
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
  }

  public toggleDeviceState(): void {
    this.firebaseService.setDeviceState(this.device.$key, !this.device.state);
  }

}
