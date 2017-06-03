export interface ISharedAccessLevel {
  userId: string;
  accessLevel: 'READ_ONLY' | 'READ_WRITE' | 'FULL';
}
