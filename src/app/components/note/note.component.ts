import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Note} from '../../services/note';
import {NoteService} from '../../services/note/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  constructor(
    private notesService: NoteService,
    public dialogRef: MatDialogRef<NoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Note
  ) {
  }

  cancelNote(): void {
    this.dialogRef.close();
  }

  saveNote(note: Note): void {
    this.notesService.saveNote(note);
  }

  ngOnInit(): void {
  }
}
