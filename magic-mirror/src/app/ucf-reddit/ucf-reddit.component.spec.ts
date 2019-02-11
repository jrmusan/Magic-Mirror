import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcfRedditComponent } from './ucf-reddit.component';

describe('UcfRedditComponent', () => {
  let component: UcfRedditComponent;
  let fixture: ComponentFixture<UcfRedditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcfRedditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcfRedditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
