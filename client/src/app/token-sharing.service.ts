import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenSharingService {
  token!: 'this.token';
constructor() { }
setMessage(data: any ){
  this.token=data
}
getMessage(){
  return this.token
}
}