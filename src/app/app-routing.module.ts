import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilePickerComponent } from './table-components/file-picker/file-picker.component';
import { MatTableComponent } from './table-components/mat-table/mat-table.component';

const routes: Routes = [
  {
    path: 'choose',
    component: FilePickerComponent
  },
  {
    path: 'table',
    component: MatTableComponent
  },
  {
    path: '**', redirectTo: '/choose', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
