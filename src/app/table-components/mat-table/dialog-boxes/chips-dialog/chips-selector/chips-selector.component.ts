import { Component, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectionList } from '@angular/material/list';

@Component({
  selector: 'app-chips-selector',
  templateUrl: './chips-selector.component.html',
  styleUrls: ['./chips-selector.component.css']
})
export class ChipsSelectorComponent implements OnInit {

  @ViewChild('headerList') headerList: MatSelectionList;
  @Output() chipsSelected = new EventEmitter<string[]>();
  headers: string[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: string[]) {
    this.headers = this.data;
  }

  ngOnInit(): void {
  }

  chipsify() {
    this.chipsSelected.emit(this.headerList.selectedOptions.selected.map(select => select.getLabel().trim()));
  }

}
