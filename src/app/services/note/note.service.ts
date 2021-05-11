import {Injectable} from '@angular/core';
import {Note} from '../../entities/note';
import {LogService} from '../log/log.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notesSet: Set<Note>;

  constructor(
    private logService: LogService,
    private httpClient: HttpClient,
    private datePipe: DatePipe
  ) {
    this.notesSet = new Set<Note>();
  }

  getNotes(): Note[] {
    this.httpClient.get<Note[]>('http://localhost:8080/notes/all').subscribe(
      value => {
        this.notesSet = new Set(value);
      }
    );

    return [...this.notesSet];
  }

  saveNote(note: Note): void {
    let params = new HttpParams();
    params = params.append('taskDescription', note.taskDescription);
    params = params.append('date', String(this.datePipe.transform(note.date, 'yyyy-MM-dd')));

    this.httpClient.get('http://localhost:8080/notes/create-note', {params}).subscribe();

    console.log(note);
  }

  deleteNote(note: Note): void {
    let params = new HttpParams();
    params = params.append('id', String(note.id));
    this.logService.log('delete note ' + note);
    this.httpClient.delete('http://localhost:8080/notes/delete-note', {params}).subscribe();
  }

}
