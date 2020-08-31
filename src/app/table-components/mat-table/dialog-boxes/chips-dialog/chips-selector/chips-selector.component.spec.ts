import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsSelectorComponent } from './chips-selector.component';

describe('ChipsSelectorComponent', () => {
  let component: ChipsSelectorComponent;
  let fixture: ComponentFixture<ChipsSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipsSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
