import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() {
  }

  log(message: string): void {
    console.log('Log message: ', message);
  }
}
