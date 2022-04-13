import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private webRequestService: WebRequestService) { }

  postQuestionToDB(payload:Object) {
    return this.webRequestService.post('http://localhost:3000/qa-sets', payload);
    //return this.webRequestService.post('sendQuestion', payload);
  }

  getQuestionFromDB(){
    return this.webRequestService.get('http://localhost:3000/qa-sets')
  }

}
