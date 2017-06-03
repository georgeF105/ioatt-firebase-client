import { IRuleCondition } from './IRuleCondition';

export interface ITimeRuleCondition extends IRuleCondition {
  startTime: string;
  endTime: string;
  type: 'time';
}
