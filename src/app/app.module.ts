import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './shared/header/header.module';
import { CategoryModule } from './category/category.module';
import { PackageModule } from './package/package.module';
import { DetailCategoryModule } from './export-category/detailCategory.module';
import { DetailPackageModule } from './import-package/detailPackage.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    CategoryModule,
    PackageModule,
    DetailCategoryModule,
    DetailPackageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
