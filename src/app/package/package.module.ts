import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportPackagesComponent } from './import-packages/import-packages.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [ImportPackagesComponent],
  exports: [ImportPackagesComponent]
})
export class PackageModule { }
