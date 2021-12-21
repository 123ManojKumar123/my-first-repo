import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SLoggerComponent } from './s-logger.component';

describe('SLoggerComponent', () => {
  let component: SLoggerComponent;
  let fixture: ComponentFixture<SLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SLoggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
