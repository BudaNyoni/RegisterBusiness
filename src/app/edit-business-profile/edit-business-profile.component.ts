import { Component, OnInit } from '@angular/core';
import {Popup} from 'ng2-opd-popup';
@Component({
  selector: 'app-edit-business-profile',
  templateUrl: './edit-business-profile.component.html',
  styleUrls: ['./edit-business-profile.component.scss']
})
export class EditBusinessProfileComponent implements OnInit {

  constructor(private popup:Popup) { }

  ngOnInit() {
  }


  showPopup(){
    this.popup.show();
    console.log('pop')
  }
}
