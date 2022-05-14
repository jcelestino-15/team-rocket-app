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
  response: string;
   
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

     response: this.response;
  }

  responses(A:string): FormArray {
    return this.responseForm.get("responses") as FormArray
  }

  newResponse(response: string): FormGroup{
    return this.fb.group({
      response: this.response,
   })
  }

  addResponse(A:string){
    this.responses(this.response).push(this.newResponse(this.response));
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
