import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-type-of-work',
  templateUrl: './type-of-work.component.html',
  styleUrls: ['./type-of-work.component.css']
})
export class TypeOfWorkComponent implements OnInit {

  @Output() typeOfWorkEmitter = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  selectTypeOfWork(typeOfWork: string): void {
    this.typeOfWorkEmitter.emit(typeOfWork);
  }

}
