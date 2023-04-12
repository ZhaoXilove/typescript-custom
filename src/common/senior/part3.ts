/* 
 交叉类型

 交叉运算符 &
 
 交叉运算符的特性
 唯一性: A & A 等价于 A
 满足交换律: A & B 等价于 B & A
 满足结合律: (A&B) & C 等价于 A & (B & C)
 父类型收敛: 如果 B 是 A的父类型, 则 A & B 将被收敛成A类型
*/
interface Point {
  x: number;
  y: number;
}

// example 1 父类型收敛
type A0 = 1 & number; // 1
type A1 = "1" & string; // 1
type A2 = true & boolean; // true

//除了never类型, 其他类型和any进行交叉运算都为any
type A3 = any & 1; // any
type A4 = any & boolean; // any
type A5 = any & never; // never

// example2 并集
interface Point {
  x: number;
  y: number;
}

interface Named {
  name: string;
}

type PointNamed = Point & Named;

interface A extends Point {}

export type { PointNamed };
