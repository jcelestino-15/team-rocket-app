import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private _url: string = "/assets/db.json"
  constructor(private webRequestService: WebRequestService) { }

  postQuestionToDB(payload:Object) {
    return this.webRequestService.post('sendQuestion', payload);
  }

  getQuestionFromDB(){
    return this.webRequestService.get(this._url);
  }

}
