import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MdButtonModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdMenuModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    MdMenuModule,
    RouterModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule { }
