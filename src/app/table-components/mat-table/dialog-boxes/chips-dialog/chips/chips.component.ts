import { Component, Input, OnInit }  from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent implements OnInit {

  chipsControl = new FormControl();
  filteredChips: Observable<string[]>;
  @Input() chips: string[];
  @Input() removable: boolean;
  @Input() mutable: boolean;
  @Input() customPlaceholder: string;

  constructor() {
    this.filteredChips = this.chipsControl.valueChanges.pipe(
      map((chip: string | null) => chip ? this._filter(chip) : this.chips.slice()));
  }

  ngOnInit(): void {
  }

  add(event: MatChipInputEvent): void {
    if (this.mutable) {
      const input = event.input;
      const value = event.value;

      if ((value || '').trim()) {
        this.chips.push(value.trim());
      }

      if (input) {
        input.value = '';
      }
    }
  }

  remove(chip: string): void {
    const index = this.chips.indexOf(chip);

    if (index >= 0) {
      this.chips.splice(index, 1);
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.chips.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }
  
}
