import { Component, OnInit } from '@angular/core';
import { Question } from '../data-model/question';
import { QuestionsService } from '../questions.service';
@Component({
  selector: 'questions-form',
  templateUrl: './questions-form.component.html',
  styleUrls: ['./questions-form.component.css']
})
export class QuestionsFormComponent implements OnInit {

  
  constructor(
    private questionService: QuestionsService) { }

  ngOnInit(): void {
    
  }

  questionType = ['Multiple Choice', 'Free Response'];

  questionAsk = ""

  questionAnswer = ""

  model=new Question("", "", "", "")

  submitted = false;

  onSubmit(){
    this.submitted = true;
  }

  sendQuestionToDB(question:object) {

    let questionJSON = { "Question" : question }

    this.questionService.postQuestionToDB(question).subscribe((response: any) => {

      console.log(response);

    })
  }


}
