import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailCategoryComponent } from './detail-category/detail-category.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [DetailCategoryComponent],
  exports: [DetailCategoryComponent]
})
export class DetailCategoryModule { }
