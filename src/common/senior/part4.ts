/* 
any 和 unknown 的区别
    
    any: 不在乎它的类型, 可以将任何值赋给any类型的变量, 并对该变量执行任何操作
    
    unknown: 我不知道它的类型 
        类型安全的any类型
        ts会对unknown类型的变量进行检查

    unknown类型的变量只能赋值给 unknown 和 any, 其他将会报错
    和any进行交叉运算时也会返回any
*/

//类型守卫
declare function isFunction(x: unknown): x is Function;

function invokeCallback(callback: unknown) {
  try {
    if (typeof callback === "function") {
      callback();
    }
  } catch (e) {
    console.error(e);
  }
}

function f20(x: unknown) {
  if (x instanceof Error) {
    x;
  }
  if (isFunction(x)) {
    x;
  }
}

export { invokeCallback };
