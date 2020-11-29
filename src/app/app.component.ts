import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'empmansys';
  v:boolean=true;
  m1(){
    this.v=false;
  }
  m2(){
    this.v=true;
  }

}
