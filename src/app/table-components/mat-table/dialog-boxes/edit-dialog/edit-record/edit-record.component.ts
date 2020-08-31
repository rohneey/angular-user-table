import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.css']
})
export class EditRecordComponent implements OnInit {

  headers: string[];
  value: any;
  headersToTransform: string[];
  aliases: any[];

  constructor(@Inject(MAT_DIALOG_DATA) private data: any) {
    this.headers = data.aliases.map(alias => alias.header);
    this.value = data.row;
    this.aliases = data.aliases;
    this.headersToTransform = data.headersToTransform;
  }

  ngOnInit() {

  }

  getAliasByHeader(header: string): string {
    return this.aliases.filter(alias => alias.header === header)[0].alias;
  }

}
