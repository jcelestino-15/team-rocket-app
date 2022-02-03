import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {
  
  constructor(public router: Router) { }

  ngOnInit(): void {
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
 this.goToPage('get-questions') 
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
