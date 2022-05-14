import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private webRequestService: WebRequestService) { }

  postQuestionToDB(payload:Object) {
    return this.webRequestService.post('sendQuestion', payload);
  }

  getQuestionFromDB(param:string){
    return this.webRequestService.get('questionsFromProfessor?token='+param);
  }

}
