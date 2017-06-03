import { IRawDevice } from './IRawDevice';
import { IRule } from 'app/models';

export interface IDevice extends IRawDevice {
  linkedRule?: IRule;
}
