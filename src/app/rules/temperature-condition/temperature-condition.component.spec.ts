import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureConditionComponent } from './temperature-condition.component';

describe('TemperatureConditionComponent', () => {
  let component: TemperatureConditionComponent;
  let fixture: ComponentFixture<TemperatureConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
