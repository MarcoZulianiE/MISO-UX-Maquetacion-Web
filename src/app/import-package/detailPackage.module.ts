import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPackageComponent } from './detail-package/detail-package.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [DetailPackageComponent],
  exports: [DetailPackageComponent]
})
export class DetailPackageModule { }
