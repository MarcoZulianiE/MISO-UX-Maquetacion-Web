import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCategoriesComponent } from './category/my-categories/my-categories.component';

const routes: Routes = [
  { path: '', component: MyCategoriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
