import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent {
  name = 'Add Question';
  questionForm: FormGroup;
  constructor(private fb: FormBuilder, private questionService: QuestionsService) {
     this.questionForm = this.fb.group({
        name: '',
        questions: this.fb.array([]),
     });

  }

  questions(): FormArray {
     return this.questionForm.get("questions") as FormArray
  }
  newQuestion(): FormGroup {
     return this.fb.group({
        Q: '',
        A: '',
     })
  }
  addQuestion() {
     this.questions().push(this.newQuestion());
  }
  removeQuestion(i: number) {
     this.questions().removeAt(i);
  }
  onSubmit() {
     console.log(this.questionForm.value);
  }

  sendQuestionToDB(arrayOfQuestionAndAnswers:Object) {
   
   console.log("TESTING THE SEND QUESTION to")


   this.questionService.postQuestionToDB(arrayOfQuestionAndAnswers).subscribe((response: any) => {

     console.log(response);

   })

 }

 printHello() {
      console.log("hello")
}


}