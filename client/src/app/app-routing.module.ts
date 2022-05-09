import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TokenComponent} from '../app/token/token.component'
import { SuccessPageComponent } from './success-page/success-page.component';
import { StudentIdComponent } from './student-id/student-id.component';
import { AnswerQuestionsComponent } from './answer-questions/answer-questions.component';

const routes: Routes = [
  {path: 'token', component:TokenComponent},
  {path: 'success-page', component:SuccessPageComponent},
  {path: 'student-id', component:StudentIdComponent},
  {path: 'answer-questions', component: AnswerQuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
