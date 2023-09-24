import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCategoriesComponent } from './category/my-categories/my-categories.component';
import { ImportPackagesComponent } from './package/import-packages/import-packages.component';

const routes: Routes = [
  { path: '', component: MyCategoriesComponent },
  { path: 'packages/import', component: ImportPackagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
