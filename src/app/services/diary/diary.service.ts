import {Injectable} from '@angular/core';
import {Internship} from '../internship';
import {LogService} from '../log/log.service';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {

  private readonly internship: Internship;
  private readonly options: string[];

  constructor(
    private logService: LogService
  ) {
    this.internship = {
      companyName: 'Kolesa',
      shortInfo: 'learn to develop backend application',
      typeOfWork: 'Project',
      periodInDays: 30
    };
    this.options = ['skills improvement', 'learn new backend topics', 'maintain real world app'];
  }

  getInternshipDescription(): Internship {
    return this.internship;
  }

  getPerspectivesOptions(): string[] {
    return this.options;
  }

  selectTypeOfWork(typeOfWork: string): void {
    this.logService.log('change type of work ' + typeOfWork);
    this.internship.typeOfWork = typeOfWork;
  }

  addOption(option: string): boolean {
    this.logService.log('add option ' + option);
    this.options.unshift(option);
    return false;
  }

  deleteOption(option: string): void {
    this.logService.log('delete option ' + option);
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i] === option) {
        this.options.splice(i, 1);
        break;
      }
    }
  }
}
