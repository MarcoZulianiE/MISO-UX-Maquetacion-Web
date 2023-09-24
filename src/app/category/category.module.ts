import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCategoriesComponent } from './my-categories/my-categories.component';
import { YesNoPanelComponent } from './yes-no-panel/yes-no-panel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyCategoriesComponent,YesNoPanelComponent],
  exports: [MyCategoriesComponent]
})
export class CategoryModule { }
