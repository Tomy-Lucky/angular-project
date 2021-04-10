import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AddNoteComponent} from '../components/add-note/add-note.component';

@Injectable({
  providedIn: 'root'
})
export class AddNoteFormDeactivateGuard implements CanDeactivate<AddNoteComponent> {
  canDeactivate(
    component: AddNoteComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !component.hasUnsavedNote() || confirm('There is unsaved note. Continue?');
  }

}
