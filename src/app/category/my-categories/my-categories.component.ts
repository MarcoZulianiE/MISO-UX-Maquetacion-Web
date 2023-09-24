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
  isPanelVisible = false;
 
  constructor() { }

  ngOnInit() {
    this.categories = this.getCategoriesList();
    console.log(this.categories);
  }

  getCategoriesList(): Array<Category> {
    return dataCategories;
  }

  showYesNoPanel() {
    this.isPanelVisible = true;
  }

  onYesClick() {
    this.isPanelVisible = false;
  }

  onNoClick() {
    this.isPanelVisible = false;
  }
}
