import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sxp-program-filter',
  templateUrl: './program-filter.component.html',
  styleUrls: ['./program-filter.component.scss']
})
export class ProgramFilterComponent {
  public launchYearList = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  @Output() public selectedLaunchYear = new EventEmitter<string>();
  @Output() public successfulLaunch = new EventEmitter<boolean>();
  @Output() public successfulLanding = new EventEmitter<boolean>();

  public onSelectedYearChange(event: Event, launchYear: string): void {
    this.selectedLaunchYear.emit(launchYear);
  }

  public onLaunchChange(event: Event, launchStatus: boolean): void {
    this.successfulLaunch.emit(launchStatus);
  }

  public onLandingChange(event: Event, landStatus: boolean): void {
    this.successfulLanding.emit(landStatus);
  }
}
