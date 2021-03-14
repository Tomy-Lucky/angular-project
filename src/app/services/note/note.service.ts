import {Injectable} from '@angular/core';
import {Note} from '../note';
import {LogService} from '../log/log.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes: Note[];

  constructor(
    private logService: LogService
  ) {
    this.notes = [
      {
        taskDescription: 'Start to learn angular basics',
        date: new Date('2021-03-07')
      },
      {
        taskDescription: 'Created first components',
        date: new Date('2021-03-10')
      },
      {
        taskDescription: 'Use data binding',
        date: new Date('2021-03-13')
      },
      {
        taskDescription: 'Try to use pipes and directives',
        date: new Date('2021-03-14')
      }
    ];
  }

  getNotes(): Note[] {
    return this.notes;
  }

  saveNote(note: Note): void {
    this.notes.push(note);
    console.log(this.notes);
  }

  deleteNote(note: Note): void {
    this.logService.log('delete note ' + note);
    for (let i = 0; i < this.notes.length; i++) {
      if (this.notes[i] === note) {
        this.notes.splice(i, 1);
        break;
      }
    }
  }

}
