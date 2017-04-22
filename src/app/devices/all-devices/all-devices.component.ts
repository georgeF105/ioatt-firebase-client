import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FirebaseService } from 'app/firebase/firebase.service';

@Component({
  selector: 'app-all-devices',
  templateUrl: './all-devices.component.html',
  styleUrls: ['./all-devices.component.scss']
})
export class AllDevicesComponent implements OnInit {
  public devices$: Observable<any>;

  constructor(
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.devices$ = this.firebaseService.getAlDevices();
  }

}
