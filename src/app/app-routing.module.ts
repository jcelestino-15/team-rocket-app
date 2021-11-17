import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TokenComponent} from '../app/token/token.component'
import { AnswerQuestionsComponent } from './answer-questions/answer-questions.component';
import { EnterTokenComponent } from './enter-token/enter-token.component';
import { GetQuestionsComponent } from './get-questions/get-questions.component';

const routes: Routes = [
  {path: 'token', component:TokenComponent},
  {path: 'get-questions', component:GetQuestionsComponent},
  {path: 'enterToken', component:EnterTokenComponent},
  {path: 'answerQuestions', component:AnswerQuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
