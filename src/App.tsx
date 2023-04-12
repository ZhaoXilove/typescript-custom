import { useEffect } from "react";
import { identity, printValue } from "./common/senior/part1";

function App() {
  const item: number = 1;
  useEffect(() => {
    console.log(identity(20, "邓超"));
  }, []);
  return <div className="App"></div>;
}

export default App;
