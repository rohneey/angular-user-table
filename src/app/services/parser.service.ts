import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Papa } from 'ngx-papaparse';

@Injectable({
  providedIn: 'root'
})
export class ParserService {

  constructor(private http: HttpClient,
              private parser: Papa) {
  }

  dataParsed = new EventEmitter<any>();
  private aliases: any[] = [];

  parse(file: File) {
    this.aliases = [];
    let counter = 1;
    this.parser.parse(file, {
      delimiter: ';',
      header: true,
      skipEmptyLines: true,
      transformHeader: header => {
        const alias = 'column' + counter;
        counter++;
        this.aliases.push({alias, header: header.trim()});
        return alias;
      },
      complete: results => {
        this.dataParsed.emit({data: results.data, aliases: this.aliases});
      }
    });
  }

  transformData(headersForTransform: string[], data: any[]) {
    headersForTransform.forEach(header => {
      const alias = this.getAliasByHeader(header);
      data.forEach(value => {
        value[alias] = value[alias].trim().split(',');
      });
    });
  }

  private getAliasByHeader(header: string): string {
    return this.aliases.filter(alias => alias.header === header)[0].alias;
  }
}
