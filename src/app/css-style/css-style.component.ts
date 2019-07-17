import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-style',
  templateUrl: './css-style.component.html',
  styleUrls: ['./css-style.component.scss']
})
export class CssStyleComponent implements OnInit {
  // isDev:boolean = true;

  divStyle:any = {
    color: 'red',
    background: 'yellow'
  }
  constructor() {
    setTimeout(() => {
      // this.isDev = false
      this.divStyle = {
        color: 'green',
        background: 'pink'
      };

    },1000);
  }

  ngOnInit() {
  }

}
