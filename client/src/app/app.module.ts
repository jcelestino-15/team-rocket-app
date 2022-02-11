import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TokenComponent } from './token/token.component';
import { FormsModule } from '@angular/forms';
import { GetQuestionsComponent } from './get-questions/get-questions.component';
import { QuestionsFormComponent } from './questions-form/questions-form.component';
import { EnterTokenComponent } from './enter-token/enter-token.component';
import { StudentIdComponent } from './student-id/student-id.component';
import { AnswerQuestionsComponent } from './answer-questions/answer-questions.component';
import { HttpClientModule } from '@angular/common/http';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SuccessPageComponent } from './success-page/success-page.component';



@NgModule({
  declarations: [
    AppComponent,
    TokenComponent,
    GetQuestionsComponent,
    QuestionsFormComponent,
    EnterTokenComponent,
    StudentIdComponent,
    AnswerQuestionsComponent,
    AddQuestionsComponent,
    SuccessPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
