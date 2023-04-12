/**
 * 联合类型
 *
 * 运算符 |
 *
 * 让定义的变量可以赋值多种类型
 *
 * 类型保护: 可以安全的访问到某个变量的特有的属性和方法
 */

// NumOrStr可以赋值给需要 number or string的类型
type NumOrStr = number | string;
let num: NumOrStr = 1;
let str: NumOrStr = "abc";

// example1
function great(person: string | string[]): string | string[] {
  //类型缩窄or类型保护
  if (typeof person === "string") {
    return `Hello, ${person}`;
    //必须为数组才可以进行map
  } else if (Array.isArray(person)) {
    return person.map((name) => `Hello, ${name}`);
  }
  throw new Error("Unable to great");
}

// example2
type HttpMethod = "Get" | "Post" | "Update" | "Delete";
function sendRequest(method: HttpMethod) {
  console.log(method);
}

export { great, sendRequest };
