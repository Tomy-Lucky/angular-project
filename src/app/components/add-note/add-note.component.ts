import {Component, OnInit} from '@angular/core';
import {NoteService} from '../../services/note/note.service';
import {Note} from '../../entities/note';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  note: Note;

  constructor(
    private notesService: NoteService
  ) {
    this.note = {
      id: 1,
      taskDescription: '',
      date: new Date()
    };
  }

  ngOnInit(): void {
  }

  saveNote(note: Note): void {
    if (this.note.taskDescription.trim() !== '') {
      this.notesService.saveNote(note);
      this.note = {
        id: 1,
        taskDescription: '',
        date: new Date()
      };
    }
  }

  hasUnsavedNote(): boolean {
    return this.note.taskDescription !== '';
  }
}
