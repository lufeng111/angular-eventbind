# AngularEventbind

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## 数据绑定 响应式编程 管道
  <!-- 
  数据绑定：双向数据绑定

  响应式编程：和angular关系不大，是由rxjs这个框架实现的，angular集成rxjs并且将一些特性建立在响应式编程的基础上，所以需要对响应式编程有一个初步的理解，才能进一步学习与之相关的特性，

  管道： 是 angular 用来格式化模板输出的一种可重用对象，

   -->
   ## 数据绑定
   <!-- 
   下面是数据绑定的三种方式：
   <h1>{{productTitle}}</h1>
   使用插值表达式将一个表达式的值显示在模板上
   
   <img [src] = "imgUrl">
   使用方括号将html标签上的一个属性绑定到一个表达式上
   
   <button (click)="toProductDetail()">商品详情</button>
   使用小括号将组件控制器的一个方法绑定到模板上一个事件的处理器

   angular 默认的数据绑定是单向的数据绑定，单向是指：要么将控制器上数据的变化显示在模板上，要么将模板上的事件绑定到组件控制器的方法上，
   angular1默认是双向数据绑定，当标签h1的内容发生变化时，productTitle这个属性的值也会发生变化，这也是angular1在处理复杂页面性能的原因，因为angular1 会在页面上维护一个存有所有数据绑定表达式的列表，浏览器事件发生时，angular1会反复检查这个列表，直到确认所有的数据都已经同步，这个过程是非常耗性能的，在angular 中默认的数据绑定方式为单向数据绑定，但是可以通过明确指定的方式，来实现数据双向绑定，也就是说双向数据绑定变成一个可选项而不是默认行为

   数据绑定的几种形式：
   事件绑定
   dom属性绑定
   html属性绑定
   双向数据绑定
    -->
  ## 事件绑定
  <!-- 
  <input (input)="onInputEvent($event)">
  ()小括号表示这是一个事件绑定，
  (input)中的input是事件名称，
  $event 浏览器事件对象
  onInputEvent($event) 组件方法名称
  "onInputEvent($event) 当事件发生时执行的表达式，这个表达式是组件控制性中的一个方法
  当小括号中指定的事件被触发时，等号右侧双引号中的表达式会被执行，
  所以每次(input)这个事件被触发时，这个onInputEvent()方法就会被调用，如果处理事件的方法onInputEvent()需要了解input事件的属性，就给这个处理事件的方法添加一个$event 参数，这个参数$event 是一个标准的浏览器事件对象，它的target属性高指向产生事件的dom 节点，也就是input节点，
  这里有两点需要注意：
  第一：等号右侧的表达式可以不是一个函数调用，也可以是一个属性赋值，想这个样子
  <button (click)="saved = true"></button> ,表示当我点击时组件的saved属性会被设为true, 
  第二点：被绑定的事件可以是标准的DOM事件，也可以是任意的自定义事件，
   -->
  
  ## 属性绑定
  <!-- 
  插值表达式和属性绑定是一个东西
  
   -->
