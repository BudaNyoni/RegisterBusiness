import { Component } from '@angular/core';
import { markDirty } from '@angular/core/src/render3';
import { $ } from 'protractor';
import {Popup} from 'ng2-opd-popup';
import { from } from 'rxjs';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';

  constructor(private popup:Popup){}


  showPopup(){
    this.popup.show();
    console.log('pop');
      
  }
}



// function next(){
// var mar=$("#slide1").css("margin-left");
// var nm=mar.replace("px","");
// if(nm == 0)
// {
//   $("right").animeate({"margin-left":"-500px"},"slow");
// }
// else if(nm > 0 ||nm!= -200 ){
// nm = nm-500;
// $("right")
// }
// }