import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TokenComponent } from './token/token.component';
import { FormsModule } from '@angular/forms';
import { GetQuestionsComponent } from './get-questions/get-questions.component';
import { QuestionsFormComponent } from './questions-form/questions-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TokenComponent,
    GetQuestionsComponent,
    QuestionsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
