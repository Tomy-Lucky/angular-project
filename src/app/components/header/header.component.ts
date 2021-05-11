import {Component, OnInit} from '@angular/core';
import {Note} from '../../entities/note';
import {MatDialog} from '@angular/material/dialog';
import {NoteComponent} from '../note/note.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  note: Note;
  notes: Note[];

  constructor(private dialog: MatDialog) {
    this.note = {
      id: 1,
      taskDescription: '',
      date: new Date()
    };
    this.notes = [];
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const matDialogRef = this.dialog.open(
      NoteComponent,
      {
        width: '250px',
        data: {
          taskDescription: this.note.taskDescription,
          date: this.note.date.toLocaleDateString()
        }
      }
    );

    matDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed ${result}');
    });
  }
}
