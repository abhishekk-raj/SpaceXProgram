import { IFirstStage } from './first-stage.model';
import { ISecondStage } from './second-stage.model';
import { IFairings } from './fairings.model';

export interface IRocket {
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
  first_stage: IFirstStage;
  second_stage: ISecondStage;
  fairings: IFairings;
}
