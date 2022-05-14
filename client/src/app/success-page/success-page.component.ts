import { Component, OnInit } from '@angular/core';
import { SharedTokenService } from '../shared-token.service';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css']
})
export class SuccessPageComponent implements OnInit {

  token:string = "";

  constructor(private sharedToken: SharedTokenService) { }

  ngOnInit(): void {
    this.sharedToken.sharedToken.subscribe(token => this.token = token)
  }

}
