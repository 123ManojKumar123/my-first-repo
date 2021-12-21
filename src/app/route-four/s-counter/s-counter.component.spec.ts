import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SCounterComponent } from './s-counter.component';

describe('SCounterComponent', () => {
  let component: SCounterComponent;
  let fixture: ComponentFixture<SCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
