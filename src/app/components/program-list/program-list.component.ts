import { Component, Input, OnChanges } from '@angular/core';
import { IPrograms } from '../../models/programs.model';
import { SpaceXService } from '../../services/spaceX.service';

@Component({
  selector: 'sxp-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss']
})
export class ProgramListComponent implements OnChanges {

  @Input() public launchYear: string;
  @Input() public successfulLaunch: boolean;
  @Input() public successfulLanding: boolean;

  public programList: IPrograms[];

  constructor(private spaceXService: SpaceXService) {
  }

  public ngOnChanges(): void {
    const onNext = (data: IPrograms[]) => {
      this.programList = data;
    };

    const onError = () => {
      console.log();
    };

    this.spaceXService.getSpaceXPrograms(this.successfulLaunch, this.successfulLanding, this.launchYear).subscribe(onNext, onError);
  }
}
