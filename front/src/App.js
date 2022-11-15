import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("useEffect fetching data");
    async function reloadData() {
      const data = await (await fetch("/getData")).json();

      console.log("got data", data);
    }

    reloadData();
  }, []);

  console.log("render App");

  return (
    <div className="App">
      <h1>It's aliveeeee 🌭</h1>
    </div>
  );
}

export default App;
