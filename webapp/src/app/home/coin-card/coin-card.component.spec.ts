import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinCardComponent } from './coin-card.component';

describe('CoinCardComponent', () => {
  let component: CoinCardComponent;
  let fixture: ComponentFixture<CoinCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoinCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
