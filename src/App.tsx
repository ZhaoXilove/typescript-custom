import { useEffect } from "react";
import { invokeCallback } from "./common/senior/part4";
function App() {
  const item: number = 1;
  useEffect(() => {
    invokeCallback(1);
  }, []);
  return <div className="App"></div>;
}

export default App;
