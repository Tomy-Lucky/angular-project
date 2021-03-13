import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DiaryComponent} from './components/diary/diary.component';
import {ContactsComponent} from './components/contacts/contacts.component';

const appRoutes: Routes = [
  {path: '', component: DiaryComponent},
  {path: 'contacts', component: ContactsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    DiaryComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
