import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCoinsComponent } from './select-coins.component';

describe('SelectCoinsComponent', () => {
  let component: SelectCoinsComponent;
  let fixture: ComponentFixture<SelectCoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCoinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
