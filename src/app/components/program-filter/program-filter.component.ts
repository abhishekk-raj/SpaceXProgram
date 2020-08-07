import { Component } from '@angular/core';

@Component({
  selector: 'sxp-program-filter',
  templateUrl: './program-filter.component.html',
  styleUrls: ['./program-filter.component.scss']
})
export class ProgramFilterComponent {
  public launchYearList = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  public selectedLaunchYear: string;
  public successfulLaunch: boolean;
  public successfulLanding: boolean;
}
