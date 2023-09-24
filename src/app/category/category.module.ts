import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCategoriesComponent } from './my-categories/my-categories.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyCategoriesComponent],
  exports: [MyCategoriesComponent]
})
export class CategoryModule { }
