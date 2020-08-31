import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableComponent} from './table-components/mat-table/mat-table.component';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {ChipsComponent} from './table-components/mat-table/dialog-boxes/chips-dialog/chips/chips.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {CdkTableModule} from '@angular/cdk/table';
import {ChipsSelectorComponent} from './table-components/mat-table/dialog-boxes/chips-dialog/chips-selector/chips-selector.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EditRecordComponent } from './table-components/mat-table/dialog-boxes/edit-dialog/edit-record/edit-record.component';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {FilePickerComponent} from './table-components/file-picker/file-picker.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
//import {HeaderComponent} from './modules/table/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    MatTableComponent,
    ChipsComponent,
    EditRecordComponent,
    ChipsSelectorComponent,
    FilePickerComponent,
    //HeaderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    DragDropModule,
    MatRadioModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    CdkTableModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    RouterModule,
    AppRoutingModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }