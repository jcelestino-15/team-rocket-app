import { Component, OnInit } from '@angular/core';
import questionPrompt from './test.json';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'answerQuestions',
  templateUrl: './answer-questions.component.html',
  styleUrls: ['./answer-questions.component.css']
})
export class AnswerQuestionsComponent implements OnInit {

  constructor(private questionService: QuestionsService) { }

  qaList: any;
  
  ngOnInit(): void {
    //this.qaList = this.questionService.getQuestionFromDB();

    this.questionService.getQuestionFromDB().subscribe(data => {
      this.qaList = data;
    });
  }

  title = 'json-file-read-angular';
  public questionList:{questionPrompt:string}[] = questionPrompt;

  receiveQuestionFromDB(){
    this.questionService.getQuestionFromDB().subscribe((response:any) => {
      console.log(response);
    })
  }
}
