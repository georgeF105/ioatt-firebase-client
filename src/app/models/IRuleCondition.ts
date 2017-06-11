export interface IRuleCondition {
  linkedDeviceKey: string;
  logicOperator: 'and' | 'or' | 'xor' | 'xand';
  type: 'temperature' | 'time' | 'weekDay';
}
