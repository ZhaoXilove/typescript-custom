/* 
type 和 interface 的区别

相同点: type和interface都可以用来描述对象或函数
    type和interface都支持扩展
    type为交叉运算符 interface使用extends

不同点:
    type别名可以为基本类型 联合类型 元组类型, 而interface不行
    同名的interface ts会自动合并, 而type别名不会

使用场景:
    type:
    -定义基本类型的别名时使用type
    -定义元组类型时, 使用type
    -定义函数类型时, 使用type
    -定义联合类型时, 使用type
    -定义联合类型时, 使用type

    interface
    -需要利用接口自动合并特性的时候, 使用interface
    -定义对象类型且无需使用type的时候, 使用interface
*/

type StringOrNumber = string | string[];

//example1
interface User {
  name: string;
}

interface User {
  id: number;
}

let user: User = {
  id: 1,
  name: "1",
};

type UserType = {
  name: string;
};

//会报错, 显示User重复
/* type UserType = {
  id: number;
};
 */

export {};
