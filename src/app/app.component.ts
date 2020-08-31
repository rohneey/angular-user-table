import { Component } from '@angular/core';
import { DataTransmitterService } from './services/data-transmitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataTransmitterService]
})
export class AppComponent {
  title = 'csv-table-test';

  constructor() {
  }

}
