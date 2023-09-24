import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCategoriesComponent } from './my-categories/my-categories.component';
import { YesNoPanelComponent } from './yes-no-panel/yes-no-panel.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [MyCategoriesComponent,YesNoPanelComponent],
  exports: [MyCategoriesComponent]
})
export class CategoryModule { }
