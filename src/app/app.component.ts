import { Component } from '@angular/core';
import { markDirty } from '@angular/core/src/render3';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';
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