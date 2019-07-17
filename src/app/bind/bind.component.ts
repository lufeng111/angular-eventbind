import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.scss']
})
export class BindComponent implements OnInit {
  divClass: string;
  // size: number = 2;
  // isBig:boolean = false;
  divClass:any = {
    a: false,
    b: false,
    c: false,
  };

  // imgUrl:string = "http://placehold.it/400x220"
  constructor() {
    setTimeout(() => {
      // this.divClass = "a b c";
      // this.isBig = true;

      this.divClass = {
        a: true,
        b: true,
        c: true,
      };
    },1000)
   }

  ngOnInit() {
  }
  // event: any 意思是any是任意数据类型的
  // doOnClick(event: any) {
  //   console.log(event);
  // }

  // doOnInput(event: any) {
  //   // 打印的value 属性是它的dom属性，
  //   // console.log(event.target.value);
  //   // 打印的value属性是它的html属性，是初始化的value属性的值，
  //   console.log(event.target.getAttribute("value"));
  // }

}
