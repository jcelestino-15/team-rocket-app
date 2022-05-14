import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TokenComponent} from '../app/token/token.component'
import { GetQuestionsComponent } from './get-questions/get-questions.component';
import { SuccessPageComponent } from './success-page/success-page.component';
import { StudentIdComponent } from './student-id/student-id.component';

const routes: Routes = [
  {path: 'token', component:TokenComponent},
  {path: 'get-questions', component:GetQuestionsComponent},
  {path: 'success-page', component:SuccessPageComponent},
  {path: 'student-id', component:StudentIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
