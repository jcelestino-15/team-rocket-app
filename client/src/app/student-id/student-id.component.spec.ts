import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentIdComponent } from './student-id.component';

describe('StudentIdComponent', () => {
  let component: StudentIdComponent;
  let fixture: ComponentFixture<StudentIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
