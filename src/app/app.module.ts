import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DiaryComponent} from './components/diary/diary.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import {NoteComponent} from './components/note/note.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './components/header/header.component';
import {NotesComponent} from './components/notes/notes.component';
import {PeriodCalculationPipe} from './pipes/period-calculation/period-calculation.pipe';
import {FooterComponent} from './components/footer/footer.component';

const appRoutes: Routes = [
  {path: '', component: DiaryComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'notes', component: NotesComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    DiaryComponent,
    ContactsComponent,
    NoteComponent,
    HeaderComponent,
    NotesComponent,
    PeriodCalculationPipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatDialogModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
        hasBackdrop: false
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
