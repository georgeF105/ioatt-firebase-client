import { IRuleCondition } from './IRuleCondition';

export interface ITemperatureRuleCondition extends IRuleCondition {
  sensorDataKey: string;
  sensorKey: string;
  type: 'temperature';
  value: number;
}
