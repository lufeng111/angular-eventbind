import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiple'
})
/*
首先管道是一个带有管道元数据装饰器@Pipe的类MultiplePipe ，和组件，模块是一样的都是一个ts类，然后通过@Pipe管道装饰器来告诉angular这是一个管道，
这个装饰器Pipe是从angular核心模块中引入的，这个装饰器允许我们定义管道的名字name: 'multiple' ，这个名字multiple 会被用在模板表达式中，它必须是一个
有效的javascript标识符，比如这个管道的名字就叫 multiple ，如果想在模板上使用这个管道的时候就要写这个名字multiple，

这个管道实现了一个叫PipeTransform 的接口，这个接口里面只有一个方法transform(),这个方法接收一个输入值value（管道输入进来的原始的值，可以是任何类型的any)
args 是可选参数，这个可选参数类似于：比如说date管道后面的字符串（参数），transform() 需要根据传进来的原始值和参数来转换原始值，然后把转换的原始值返回回去就可以了
args 值是可选的，需要处理一下参数不存在的情况

*/
export class MultiplePipe implements PipeTransform {

  // transform(value: any, ...args: any[]): any {
  //   return null;
  // }

  // 例如:
  transform(value: number, args?: number): any {
    if(!args){
      args = 1;
    }
    return value * args;
  }

}
