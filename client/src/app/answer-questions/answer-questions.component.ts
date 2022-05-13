import { Component, OnInit } from '@angular/core';
import { SharedTokenService } from '../shared-token.service';
import { SharedStudentIdService } from '../shared-student-id.service';
import { Question } from '../question.model';
import { QuestionsService } from '../questions.service';
import { Form, FormArray, FormGroup,FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-answer-questions',
  templateUrl: './answer-questions.component.html',
  styleUrls: ['./answer-questions.component.css']
})
export class AnswerQuestionsComponent implements OnInit {

  questionlist: any = {} as Question;
  token!: string;
  student_id: string;
  responseForm: FormGroup
   
  constructor(private fb: FormBuilder, private questionService: QuestionsService, private sharedToken: SharedTokenService,
    private sharedStudentID: SharedStudentIdService, public router: Router) {
    this.responseForm = this.fb.group({
      token: this.token,
      student_id: this.student_id,
      responses:this.fb.array([]),
    })
   }
 
 
  ngOnInit(): void {
    this.sharedToken.sharedToken.subscribe(token => this.token = token)
 
    this.sharedStudentID.sharedID.subscribe(student_id => this.student_id = student_id)
    this.questionService.getQuestionFromDB(this.token).subscribe(response=> {
      this.questionlist = response;
       console.log(JSON.stringify(this.questionlist));
     });
 
     this.responseForm = this.fb.group({
       token: this.token,
       student_id: this.student_id,
       responses: this.fb.array([]),
     })
  }

  responses(): FormArray {
    return this.responseForm.get("responses") as FormArray
  }

 
  onSubmit(){
    console.log(this.responseForm.value);
  }

  sendResponseToDB(arrayOfStudentAnswers:Object) {
   
    console.log("TESTING THE SEND RESPONSE to")
 
    this.questionService.postResponseToDB(arrayOfStudentAnswers).subscribe((response: any) => {
 
       console.log(response);
     })

     this.router.navigate(['/success-page']);
 
  }


}
