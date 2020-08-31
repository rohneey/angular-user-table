import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTransmitterService } from '../../services/data-transmitter.service';
import { Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ParserService } from '../../services/parser.service';

@Component({
  selector: 'app-file-picker',
  templateUrl: './file-picker.component.html',
  styleUrls: ['./file-picker.component.css']
})
export class FilePickerComponent implements OnInit {

  @ViewChild('fileInput') fileInput;

  constructor(private dataService: DataTransmitterService,
              private router: Router,
              private snackBar: MatSnackBar,
              private parser: ParserService) {
  }

  ngOnInit(): void {
    this.parser.dataParsed.subscribe(pair => {
        if (!pair.data.length) {
          this.openSnackBar('No data available!', null);
        } else {
          this.dataService.transmitData(pair);
          this.router.navigate(['/table']).then(() => {
          });
        }
      }
    );
  }

  onClickFileInputButton() {
    this.fileInput.nativeElement.click();
  }

  onChangeFileInput() {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    if (files[0].name.split('.').pop() === 'csv') {
      this.parser.parse(files[0]);
    } else {
      this.openSnackBar('Incorrect input file!', null);
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
