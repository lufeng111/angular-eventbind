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
  插值表达式和属性绑定两种效果是一样的，一般插值表达式写法更简单，但是angular 在渲染的时候，都是把插值表达式装换成 属性绑定 
   -->

  ## html属性和dom属性的区别
<!-- 
console.log(event.target.value); 打印的是dom属性
console.log(event.target.getAttribute("value")); 打印的是html属性
dom属性 表示当前的值，html属性是初始化的值，

html属性和dom属性的关系
1： 少量html属性和dom属性之间有着1:1的映射，比如id
2: 有些html属性没有对应的dom属性，如colspan
3: 有些dom属性没有对应的html属性，如textContent
4: 就算名字相同，html属性和dom属性也不是同一个东西
5： html属性的值指定了初始值，dom属性的值表示当前值，dom属性的值可以改变，html属性的值不能改变
6： 模板绑定是通过dom属性和事件来工作的，而不是html属性
7： 插值表达式是dom属性绑定
 -->
## dom 属性绑定
<!-- 

angular:
@Component({...})
class MyComponent {
  greeting: string = 'A value';
}
greeting: string 意思是greeting的数据类型是string
组件的控制器上有greeting 属性
当控制器greeting 发生改变时会触发angular的dom属性绑定机制，修改模板上input的dom属性，

模板：
<input [value]="greeting">
模板value属性通过方括号[],和组件控制器上greeting属性绑定到一起，

浏览器：
DOM
inputElement.value === 'A value'

dom属性绑定机制： 当控制器greeting 值发生改变时，angular会使用单向绑定机制来更新dom, 这个单向是指从控制器的greeting到浏览器的DOM ，把dom属性的value的值inputElement.value改成greeting的值'A value'，这是第一步
第二步 注意：angular的dom属性绑定不会更新html元素的属性，在这个例子中，html属性的值会一直是空的，
第三步：因为浏览器会保持dom和你的UI同步，所以angular在改变dom的value属性之后，新的value的值，会被渲染到页面上，这时候input输入框中就会显示'A value', 
第四步： 注意Dom的value属性的改变，不会更新与其相关的input标签的html属性，
第五步： 当用户再input标签里输入内容时，浏览器也不会同步UI和html属性，用户看到的新值来自于dom,而不是html标签，所以修改input中的值是dom属性在变，不是html值，

注意：[value]="greeting" 如果方括号没有写，angular不会把等号右侧的字符串greeting当成表达式来处理，并执行绑定的，而是会当成一个字符串赋值给value的值，
 -->
