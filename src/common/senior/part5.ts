/**
 * type 类型
 *
 */
let name: string = "les";
let age: number = 20;
let isNan: boolean = false;
let any: any = [1];

let age2: never;
interface Vector1D {
  x: number;
}
interface Vector2D extends Vector1D {
  y: number;
}
interface Vector3D extends Vector2D {
  z: number;
}

interface Shape1D {
  x: number;
}
interface Shape2D {
  x: number;
  y: number;
}

//接收两个参数, 1 如果有继承 2的值, 将返回true, 否则返回false
type SubtypeOf<T, U> = T extends U ? true : false;
type A = SubtypeOf<Shape2D, Shape1D>; //true 2包含了1
type B = SubtypeOf<Shape1D, Shape1D>; //true 1包含了1
type C = SubtypeOf<Shape1D, Shape2D>; //false 1不包含2
export type { Shape1D };
