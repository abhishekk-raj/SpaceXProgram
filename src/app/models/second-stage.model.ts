import { IPayload } from './payload.model';

export interface ISecondStage {
  block: string;
  payloads: IPayload[];
}
