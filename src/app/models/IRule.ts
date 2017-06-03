import { ITemperatureRuleCondition } from './ITemperatureRuleCondition';
import { ITimeRuleCondition } from './ITimeRuleCondition';

export interface IRule {
  active: boolean;
  conditions: ITemperatureRuleCondition | ITimeRuleCondition;
  linkedDeviceKey: string;
  name: string;
}
