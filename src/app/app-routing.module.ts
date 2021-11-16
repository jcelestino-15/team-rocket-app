import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TokenComponent} from '../app/token/token.component'
import { GetQuestionsComponent } from './get-questions/get-questions.component';

const routes: Routes = [
  {path: 'token', component:TokenComponent},
  {path: 'get-questions', component:GetQuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
