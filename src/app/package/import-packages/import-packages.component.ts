import { Component, OnInit } from '@angular/core';
import { Package } from '../package';
import { dataPackages } from '../dataPackages';

@Component({
  selector: 'app-import-packages',
  templateUrl: './import-packages.component.html',
  styleUrls: ['./import-packages.component.css']
})
export class ImportPackagesComponent implements OnInit {

  packages: Array<Package> = [];

  constructor() { }

  ngOnInit() {
    this.packages = this.getPackagesList();
    console.log(this.packages);
  }

  getPackagesList(): Array<Package> {
    return dataPackages;
  }

  changeHeartState(pack: Package) {
    pack.like = !pack.like;
    console.log(pack);
  }

}