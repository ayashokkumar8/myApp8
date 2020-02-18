import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortActivityComponent } from './resort-activity.component';

describe('ResortActivityComponent', () => {
  let component: ResortActivityComponent;
  let fixture: ComponentFixture<ResortActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResortActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
