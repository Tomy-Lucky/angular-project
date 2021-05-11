import {Component, OnInit, Input} from '@angular/core';
import {InternshipDescription} from '../../../entities/internshipDescription';

@Component({
  selector: 'app-work-description',
  templateUrl: './work-description.component.html',
  styleUrls: ['./work-description.component.css']
})
export class WorkDescriptionComponent implements OnInit {

  @Input() internshipDescription: InternshipDescription;

  constructor() {
    this.internshipDescription = new InternshipDescription();
  }

  ngOnInit(): void {
  }

}
