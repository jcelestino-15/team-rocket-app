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

  constructor(private router: Router, private questionService: QuestionsService) { }
  token: string = '';
  ngOnInit(): void {
  }
  goToPage(pageName:string):void {
    this.router.navigate([`${pageName}`])
  }

  questionsFromProfessor(tokenParam: string) {
   
    this.token = tokenParam;

    console.log("Value of token: " +this.token)
 
    this.questionService.getQuestionFromDB(this.token).subscribe((response: any) => {
 
       console.log(response);
     })
 
     this.router.navigate(['/success-page']);
 
  }

}

