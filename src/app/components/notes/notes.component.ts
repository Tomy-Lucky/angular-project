import {Component, OnInit} from '@angular/core';
import {NoteService} from '../../services/note/note.service';
import {Note} from '../../services/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Note[];

  constructor(
    private noteService: NoteService
  ) {
    this.notes = noteService.getNotes();
  }

  ngOnInit(): void {
    this.notes = this.noteService.getNotes();
  }

  deleteNote(note: Note): void {
    this.noteService.deleteNote(note);
  }
}
