import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleConditionComponent } from './rule-condition.component';

describe('RuleConditionComponent', () => {
  let component: RuleConditionComponent;
  let fixture: ComponentFixture<RuleConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
