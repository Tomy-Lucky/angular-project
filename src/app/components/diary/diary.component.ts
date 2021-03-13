import {Component, OnInit} from '@angular/core';
import {Internship} from '../../services/internship';
import {DiaryService} from '../../services/diary/diary.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  studentName: string;
  internship: Internship;
  options: string[];
  isEditDescription: boolean;

  constructor(
    private diaryService: DiaryService
  ) {
    this.studentName = 'Student';
    this.isEditDescription = false;
    this.internship = this.diaryService.getInternshipDescription();
    this.options = this.diaryService.getPerspectivesOptions();
  }

  ngOnInit(): void {
    this.internship = this.diaryService.getInternshipDescription();
    this.options = this.diaryService.getPerspectivesOptions();
  }

  selectTypeOfWork(typeOfWork: string): void {
    this.diaryService.selectTypeOfWork(typeOfWork);
  }

  addOption(option: string): boolean {
    return this.diaryService.addOption(option);
  }

  deleteOption(option: string): void {
    this.diaryService.deleteOption(option);
  }

  showEdit(): void {
    this.isEditDescription = !this.isEditDescription;
  }
}
