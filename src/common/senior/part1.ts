/* 
泛型
T(Type), K(key), V(value), E(Element)

T可以定义多个, 例如: <T, U>

定义区间为: 函数声明<T>, 形参<T>, 函数返回值<T>

泛型用来定义一个可以复用的函数, 可以根据参数动态确定函数返回类型, 
也可以说是类型函数, 其标识T为占位符, 在调用时确定其类型

函数中的T表示为一个泛型函数
*/

//example1:
const printValue = <T>(value: T): T => {
  console.log(value);
  return value;
};

//example2:
function identity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

export { printValue, identity };
