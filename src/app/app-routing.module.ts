import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCategoriesComponent } from './category/my-categories/my-categories.component';
import { DetailCategoryComponent } from './export-category/detail-category/detail-category.component';
import { ImportPackagesComponent } from './package/import-packages/import-packages.component';
import { DetailPackageComponent } from './import-package/detail-package/detail-package.component';

const routes: Routes = [
  { path: '', component: MyCategoriesComponent },
  { path: 'packages/import', component: ImportPackagesComponent },
  { path: 'detailCategory', component: DetailCategoryComponent },
  { path: 'detailPackage', component: DetailPackageComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
