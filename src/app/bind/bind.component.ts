import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.scss']
})
export class BindComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // event: any 意思是any是任意数据类型的
  doOnClick(event: any) {
    console.log(event);
  }

}
