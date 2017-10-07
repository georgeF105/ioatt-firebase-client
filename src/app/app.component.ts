import { Component, OnInit } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private iconRegistry: MdIconRegistry,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.iconRegistry.addSvgIcon(
        'thermometer',
        this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/thermometer.svg'));

    this.iconRegistry.addSvgIcon(
      'home-icon',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/home-icon.svg'));
  }
}
