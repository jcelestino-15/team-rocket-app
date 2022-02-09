import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenSharingService } from '../token-sharing.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  constructor(private router: Router, private shared: TokenSharingService) { }
  
  values = '';
  token = '';

  onKey(event:any) {
    this.values = event.target.value;
    console.log(this.values)
  }

createToken(){
 
 console.log("the token value is:" + this.token)
 this.goToPage('get-questions') 
}

ngOnInit(): void {
  this.shared.setMessage(this.token);
}

// generateString(length: number): string {
//     // declare all characters
//   let characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';  
//   let result = ' ';
//     const charactersLength = characters.length;
//     for ( let i = 0; i < length; i++ ) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     this.token = result;
//     return result;
// }

goToPage(pageName:string):void {
  this.router.navigate([`${pageName}`])
}

}
