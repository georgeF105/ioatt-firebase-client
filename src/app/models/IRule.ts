import { ITemperatureRuleCondition } from './ITemperatureRuleCondition';
import { ITimeRuleCondition } from './ITimeRuleCondition';
import { IWeekDayRuleCondition } from './IWeekDayRuleCondition';

export interface IRule {
  active: boolean;
  conditions: Array<ITemperatureRuleCondition | ITimeRuleCondition | IWeekDayRuleCondition>;
  linkedDeviceKey: string;
  name: string;
}
