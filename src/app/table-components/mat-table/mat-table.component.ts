import { Component, OnInit, ViewChild } from '@angular/core';
import { ParserService } from '../../services/parser.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditRecordComponent } from './dialog-boxes/edit-dialog/edit-record/edit-record.component';
import { ChipsSelectorComponent}  from './dialog-boxes/chips-dialog/chips-selector/chips-selector.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataTransmitterService } from '../../services/data-transmitter.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css']
})
export class MatTableComponent implements OnInit {
  @ViewChild('mat-table') table: MatTable<any[]>;
  mutationDialog: MatDialogRef<any>;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  dataSource: MatTableDataSource<any>;

  values: any[];
  headers: string[];
  headersToTransform: string[] = [];
  file: File;
  aliases = [];

  showTable = false;
  loading = false;

  constructor(private parser: ParserService,
              public dialog: MatDialog,
              private snackBar: MatSnackBar,
              private dataService: DataTransmitterService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.dialog.closeAll();
    this.dataService.currentData.subscribe(pair => {
      if (pair != null && pair.data != null && pair.aliases != null) {
        this.dataSource = new MatTableDataSource(pair.data);
        this.values = pair.data;
        this.aliases = pair.aliases;
        this.headers = pair.aliases.map(alias => alias.header);
        this.mutationDialog = this.dialog.open(ChipsSelectorComponent, {
          data: this.headers
        });
        this.headers = this.headers.concat(['Actions']);
        this.mutationDialog.componentInstance.chipsSelected.subscribe((headersToTransform) => {
          this.loading = true;
          this.headersToTransform = headersToTransform;
          this.parser.transformData(headersToTransform, this.values);
          this.loading = false;

          this.dataSource.paginator = this.paginator;
          this.showTable = true;
        });
      } else {
        this.router.navigate(['/choose']);
      }
    });
  }

  getAliasByHeader(header: string): string {
    return this.aliases.filter(alias => alias.header === header)[0].alias;
  }

  drop(event: CdkDragDrop<any[]>) {
    const offset = this.paginator.pageIndex * this.paginator.pageSize;
    moveItemInArray(this.values, event.previousIndex + offset, event.currentIndex + offset);
    this.render();
  }

  editRow(row: any) {
    this.dialog.open(EditRecordComponent, {
      data: {row, headersToTransform: this.headersToTransform, aliases: this.aliases},
      panelClass: 'custom-dialog-container'
    });
  }

  deleteRow(element: any) {
    this.values.splice(this.values.indexOf(element), 1);
    if (this.values.length === 0) {
      this.router.navigate(['/choose']);
    } else {
      this.render();
    }
  }

  render() {
    this.dataSource = new MatTableDataSource<Element>(this.values);
    this.dataSource.paginator = this.paginator;
  }
}
