/* 
keyof 循环
extends 是泛型约束的语法, 用于约束类型的范围
*/

type User = {
  id: number;
  name: string;
  address: string;
};
type PickedUser = Pick<User, "id" | "name">;

export {};
