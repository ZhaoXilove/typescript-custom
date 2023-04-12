import { useEffect } from "react";
import { userId } from "./common/senior/part10";
function App() {
  const item: number = 1;
  useEffect(() => {
    console.log(userId);
  }, []);
  return <div className="App"></div>;
}

export default App;
