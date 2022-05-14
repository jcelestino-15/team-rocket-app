import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedStudentIdService {

  private student_id= new BehaviorSubject('');
  sharedID = this.student_id.asObservable();

  constructor() { }

  newID(student_id: string){
    this.student_id.next(student_id)
  }
}
