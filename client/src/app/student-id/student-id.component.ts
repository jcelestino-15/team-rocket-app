import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { QuestionsService } from '../questions.service';
import { SharedTokenService } from '../shared-token.service';
import { SharedStudentIdService } from '../shared-student-id.service';
@Component({
  selector: 'studentId',
  templateUrl: './student-id.component.html',
  styleUrls: ['./student-id.component.css']
})
export class StudentIdComponent implements OnInit {

  constructor(private router: Router, private questionService: QuestionsService, private sharedToken: SharedTokenService,
    private sharedStudentID: SharedStudentIdService ) { }
  token: string = '';
  student_id: string = '';

  ngOnInit(): void {
    this.sharedStudentID.sharedID.subscribe(student_id => this.student_id = this.student_id)
  }
  goToPage(pageName:string):void {
    this.router.navigate([`${pageName}`])
  }

  sendToken(tokenParam: string, studentidParam: string){
    this.token = tokenParam;
    this.sharedToken.newToken(this.token)
    this.sharedStudentID.newID(this.student_id)
    console.log("Value of token: " + this.token)
    console.log("Value of student id: " + this.student_id)
    this.goToPage('answer-questions');
  }


}

