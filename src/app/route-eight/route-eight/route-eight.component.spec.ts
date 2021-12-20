import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteEightComponent } from './route-eight.component';

describe('RouteEightComponent', () => {
  let component: RouteEightComponent;
  let fixture: ComponentFixture<RouteEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteEightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
