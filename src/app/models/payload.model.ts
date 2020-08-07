import { IOrbitParams } from './orbit-params.model';

export interface IPayload {
  payload_id: string;
  norad_id: string[];
  reused: boolean;
  customers: string[];
  nationality: string;
  manufacturer: string;
  payload_type: string;
  payload_mass_kg: number;
  payload_mass_lbs: number;
  orbit: string;
  orbit_params: IOrbitParams[];
}
