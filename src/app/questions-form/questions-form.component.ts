import { Component, OnInit } from '@angular/core';
import { Question } from '../data-model/question';
@Component({
  selector: 'questions-form',
  templateUrl: './questions-form.component.html',
  styleUrls: ['./questions-form.component.css']
})
export class QuestionsFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  questionType = ['multiple choice', 'free response'];

  model = new Question('mc');

  submitted = false;

  onSubmit(){
    this.submitted = true;
  }

}
