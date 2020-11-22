import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';
import { QuestionBase }    from './question-base';
import { Observable }      from 'rxjs';
@Component({
  selector: 'app-dynamic-form-base',
  templateUrl: './dynamic-form-base.component.html',
  styleUrls: ['./dynamic-form-base.component.scss']
})
export class DynamicFormBaseComponent implements OnInit {
  questions$: Observable<QuestionBase<any>[]>;
  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }

  ngOnInit() {
  }

}
