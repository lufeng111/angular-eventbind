import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {
  name: string;
  constructor() {
    setInterval(()=>{
      this.name = "Tom";
    },3000)
   }

  ngOnInit() {
  }

  doOnInput(event) {
    this.name = event.target.value;
  }

}
