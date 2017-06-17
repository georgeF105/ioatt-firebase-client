import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekDayConditionComponent } from './week-day-condition.component';

describe('WeekDayConditionComponent', () => {
  let component: WeekDayConditionComponent;
  let fixture: ComponentFixture<WeekDayConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekDayConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekDayConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
