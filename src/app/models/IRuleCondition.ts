export interface IRuleCondition {
  logicOperator: 'and' | 'or' | 'xor' | 'xand';
  type: 'temperature' | 'time';
}
