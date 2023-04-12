/**
 * TS 映射类型
 *
 * 映射类型语法: in
 * 类似于for in语句
 * {[P in K]: T}
 */

/* 

映射类型语法
{[P in K]: T}
{[P in K]?: T}
{[P in K]-?: T}
{readonly[P in K]: T}
{readonly[P in K]?: T}
{-readonly[P in K]?: T} 

*/

// example1
type Item = { a: string; b: number; c: boolean };

//直接遍历
type T1 = { [P in "x" | "y"]: number };

//用key赋值给key
type T2 = { [P in "x" | "y"]: P };

//挑选指定变量内的key
type T3 = { [P in "a" | "b"]: Item[P] };

//循环出指定变量所有的key
type T4 = { [P in keyof Item]: Item[P] };

type User = {
  name: string;
  password: string;
  address: string;
  phone: string;
};

//P 为每一项key
type UserPartial<User> = {
  readonly [P in keyof User]?: User[P];
};
const user: UserPartial<User> = {};
export {};
