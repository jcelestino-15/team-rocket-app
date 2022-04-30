import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import questionPrompt from './test.json';
@Component({
  selector: 'answerQuestions',
  templateUrl: './answer-questions.component.html',
  styleUrls: ['./answer-questions.component.css']
})
export class AnswerQuestionsComponent implements OnInit {

  constructor(public questionService: QuestionsService) { }

  questions: any = [];
  ngOnInit(): void {
    this.questionService.getQuestionFromDB().subscribe( (data: any) => {
      this.questions = data;
    });
  }
  title = 'json-file-read-angular';
  public questionList:{questionPrompt:string}[] = questionPrompt;
}
