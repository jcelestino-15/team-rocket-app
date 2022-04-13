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
  
  qaList: any;
  ngOnInit(): void {
    this.questionService.getQuestionFromDB().subscribe(data => {
      this.qaList = data;
    })
  }
  title = 'json-file-read-angular';
  public questionList:{questionPrompt:string}[] = questionPrompt;
}
