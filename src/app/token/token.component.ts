import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  values = '';
  token = '';

  onKey(event:any) {
    this.values = event.target.value;
    console.log(this.values)
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
