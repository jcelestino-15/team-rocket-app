import { Component, OnInit } from '@angular/core';
import questionPrompt from './test.json';
@Component({
  selector: 'answerQuestions',
  templateUrl: './answer-questions.component.html',
  styleUrls: ['./answer-questions.component.css']
})
export class AnswerQuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'json-file-read-angular';
  public questionList:{questionPrompt:string}[] = questionPrompt;
}
