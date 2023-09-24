import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-yes-no-panel',
  templateUrl: './yes-no-panel.component.html',
  styleUrls: ['./yes-no-panel.component.css']
})
export class YesNoPanelComponent  {

  @Output() yesClick = new EventEmitter<void>();
  @Output() noClick = new EventEmitter<void>();

  onYesClick() {
    this.yesClick.emit();
  }
  
  onNoClick() {
    this.noClick.emit();
  }
}
