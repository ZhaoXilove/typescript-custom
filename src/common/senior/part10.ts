/**
 * keyof 操作符
 */
//约束了T类型的实际类型为object的子类型, 约束了K类型为 T 类型所有键组成的联合类型
function getProperty<T extends object, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = {
  id: "id:1",
  name: "",
};

const userId = getProperty(user, "id");
const userName = getProperty(user, "name");
export { userId };
