import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedTokenService } from '../shared-token.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {
  
  constructor(public router: Router, private sharedToken: SharedTokenService) { }

  ngOnInit(): void {
    this.sharedToken.sharedToken.subscribe(token => this.token = token)
  }

  values = '';
  token = '';

  onKey(event:any) {
    this.values = event.target.value;
    this.token = this.values;
    console.log(this.values)
  }
  
  goToPage(pageName:string):void {

    this.router.navigate([`${pageName}`])
  }  

  createToken(){
 
    console.log("the token value is:" + this.token)
    this.sharedToken.newToken(this.token)
    this.goToPage('add-questions') 
  }

generateString(length: number): string {
    // declare all characters
  let characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';  
  let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    this.token = result;
    return result;
}


}
