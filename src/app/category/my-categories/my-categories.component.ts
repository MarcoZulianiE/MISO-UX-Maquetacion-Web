import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { dataCategories } from '../dataCategories';

@Component({
  selector: 'app-my-categories',
  templateUrl: './my-categories.component.html',
  styleUrls: ['./my-categories.component.css']
})
export class MyCategoriesComponent implements OnInit {

  categories: Array<Category> = [];
  getCategoriesList(): Array<Category> {
    return dataCategories;
  }

  constructor() { }

  ngOnInit() {
    this.categories = this.getCategoriesList();
    console.log(this.categories);
  }

}
