/**
 * 索引签名
 */
interface NumberNames {
  [key: string]: string;
}

const names: NumberNames = {
  "1": "one",
};

// ts会进行强制类型转换number为string
const value1 = names["1"];
const value2 = names[1];

/* 
不能魏字面量类型或者泛型
type User1 = {
  [key: "id"]: string;
};

type User2 = {
  [key: "id" | "name"]: string;
};
 */

//Record工具类型可以实现
type User3 = Record<"id", string>;
type User4 = Record<"id" | "name", string>;
export {};
