import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../../services/spaceX.service';
import { IPrograms } from '../../models/programs.model';

@Component({
  selector: 'sxp-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss']
})
export class ProgramListComponent implements OnInit {
  public programList: IPrograms[];

  constructor(private spaceXService: SpaceXService) {
  }

  public ngOnInit(): void {
    const onNext = (data: IPrograms[]) => {
      this.programList = data;
    };

    const onError = () => {
      console.log();
    };

    this.spaceXService.getSpaceXPrograms().subscribe(onNext, onError);
  }
}
