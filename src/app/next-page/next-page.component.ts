import { Component, OnInit } from '@angular/core';
// import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-next-page',
  templateUrl: './next-page.component.html',
  styleUrls: ['./next-page.component.scss']
})
export class NextPageComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

}
