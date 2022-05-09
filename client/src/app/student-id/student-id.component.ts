import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { QuestionsService } from '../questions.service';
import { TokenComponent } from '../token/token.component';
import { SharedTokenService } from '../shared-token.service';

@Component({
  selector: 'studentId',
  templateUrl: './student-id.component.html',
  styleUrls: ['./student-id.component.css']
})
export class StudentIdComponent implements OnInit {

  constructor(private router: Router, private questionService: QuestionsService, private sharedToken: SharedTokenService ) { }
  token: string = '';
  ngOnInit(): void {
  }
  goToPage(pageName:string):void {
    this.router.navigate([`${pageName}`])
  }

  sendToken(tokenParam: string){
    this.token = tokenParam;
    this.sharedToken.newToken(this.token)
    console.log("Value of token: " + this.token)
   
    this.goToPage('answer-questions');
  }


}

