import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedTokenService {
  
  private token = new BehaviorSubject('');
  sharedToken = this.token.asObservable();
  
  constructor() { }

  newToken(token: string) {
    this.token.next(token)
  }
}
