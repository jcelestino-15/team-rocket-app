import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent {
  name = 'Add Question';
  questionForm: FormGroup;
  constructor(private fb: FormBuilder) {
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
}