import { ISharedAccessLevel } from './ISharedAccessLevel';

export interface IRawDevice {
  id: string;
  name: string;
  state: boolean;
  updatedByDevice: boolean;
  updatedByHost: boolean;
  owner: string;
  sharedWith: ISharedAccessLevel[];
}
