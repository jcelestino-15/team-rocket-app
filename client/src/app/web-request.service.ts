import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) { 

    this.ROOT_URL = 'http://localhost:3000'

  }

  get(uri: string) {
    return this.http.get('http://localhost:3000/qa-sets');
  }

  post(uri: string, payload: Object) {
    return this.http.post('http://localhost:3000/qa-sets', payload)

    //return this.http.post(`${this.ROOT_URL}/${uri}`, payload)
  }

  patch(uri: string, payload: Object) {
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload)
  }

  delete(uri: string) {
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }


}

// go to client/src/assets

// npm install -g json-server

// json-server --watch ./db.json

