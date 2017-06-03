import { IRawDevice } from './IRawDevice';
import { IRule } from './IRule';
import { ISharedAccessLevel } from './ISharedAccessLevel';

export interface IDevice extends IRawDevice {
  linkedRule?: IRule;
  users?: ISharedAccessLevel[];
}
