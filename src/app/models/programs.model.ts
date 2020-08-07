import { IRocket } from './rocket.model';
import { ITelemetry } from './telemetry.model';
import { ILaunchSite } from './launch-site.model';
import { ILaunchFailureDetails } from './launch-failure-details.model';
import { ILinks } from './links.model';
import { ITimeline } from './timeline.model';

export interface IPrograms {
  flight_number: number;
  mission_name: string;
  mission_id: string[];
  upcoming: boolean;
  launch_year: string;
  launch_date_unix: number;
  launch_date_utc: string;
  launch_date_local: string;
  is_tentative: boolean;
  tentative_max_precision: string;
  tbd: boolean;
  launch_window: number;
  rocket: IRocket;
  ships: string[];
  telemetry: ITelemetry;
  launch_site: ILaunchSite;
  launch_success: boolean;
  launch_failure_details: ILaunchFailureDetails;
  links: ILinks;
  details: string;
  static_fire_date_utc: string;
  static_fire_date_unix: number;
  timeline: ITimeline;
  crew?: any;
}
