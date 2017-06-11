import { IRuleCondition } from './IRuleCondition';

export interface IWeekDayRuleCondition extends IRuleCondition {
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  type: 'weekDay';
}
