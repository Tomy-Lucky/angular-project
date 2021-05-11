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
import {TypeOfWorkComponent} from './components/diary/type-of-work/type-of-work.component';
import {WorkDescriptionComponent} from './components/diary/work-description/work-description.component';
import {AddNoteComponent} from './components/add-note/add-note.component';
import {AddNoteFormDeactivateGuard} from './guards/add-note-form-deactivate.guard';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';
import {ProductsComponent} from './components/products/products.component';
import {AddProductComponent} from './components/add-product/add-product.component';

const appRoutes: Routes = [
  {path: '', component: DiaryComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'notes', component: NotesComponent},
  {path: 'add-note', component: AddNoteComponent, canDeactivate: [AddNoteFormDeactivateGuard]},
  {path: 'products', component: ProductsComponent},
  {path: 'add-product', component: AddProductComponent}
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
    FooterComponent,
    TypeOfWorkComponent,
    WorkDescriptionComponent,
    AddNoteComponent,
    ProductsComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatDialogModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DatePipe,
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
