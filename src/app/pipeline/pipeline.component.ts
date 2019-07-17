import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.scss']
})
export class PipelineComponent implements OnInit {

  // birthday 数据类型是日期Date
  birthday: Date = new Date();
  pi: number = 3.1415926;

  size: number = 7;

  constructor() { }

  ngOnInit() {
  }

}
