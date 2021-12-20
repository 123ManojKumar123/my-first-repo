import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteSevenComponent } from './route-seven.component';

describe('RouteSevenComponent', () => {
  let component: RouteSevenComponent;
  let fixture: ComponentFixture<RouteSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteSevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
