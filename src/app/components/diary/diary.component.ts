import {Component, OnInit} from '@angular/core';

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

  constructor() {
    this.studentName = 'Student';
    this.internship = {
      companyName: 'Kolesa',
      shortInfo: 'learn to develop backend application',
      typeOfWork: 'Project',
      periodInDays: 30
    };
    this.options = ['skills improvement', 'learn new backend topics', 'maintain real world app'];
    this.isEditDescription = false;
  }

  ngOnInit(): void {

  }

  selectTypeOfWork(typeOfWork: string): void {
    this.internship.typeOfWork = typeOfWork;
  }

  addOption(option: string): boolean {
    this.options.unshift(option);
    return false;
  }

  deleteOption(option: string): void {
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i] === option) {
        this.options.splice(i, 1);
        break;
      }
    }
  }

  showEdit(): void {
    this.isEditDescription = !this.isEditDescription;
  }
}

interface Internship {
  companyName: string;
  shortInfo: string;
  typeOfWork: string;
  periodInDays: number;
}
