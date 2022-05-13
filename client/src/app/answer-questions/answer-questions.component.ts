import { Component, OnInit } from '@angular/core';
import { SharedTokenService } from '../shared-token.service';
import { TokenComponent } from '../token/token.component';
import { Question } from '../question.model';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-answer-questions',
  templateUrl: './answer-questions.component.html',
  styleUrls: ['./answer-questions.component.css']
})
export class AnswerQuestionsComponent implements OnInit {

  questionlist: any = {} as Question;
  token!: string;
   
  constructor(private questionService: QuestionsService, private sharedToken: SharedTokenService) { }
 
 
  ngOnInit(): void {
    this.sharedToken.sharedToken.subscribe(token => this.token = token)
 
    this.questionService.getQuestionFromDB(this.token).subscribe(response=> {
      this.questionlist = response;
       console.log(JSON.stringify(this.questionlist));
     });
 
  }


}
