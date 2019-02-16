import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelTimesComponent } from './travel-times.component';

describe('TravelTimesComponent', () => {
  let component: TravelTimesComponent;
  let fixture: ComponentFixture<TravelTimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelTimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
