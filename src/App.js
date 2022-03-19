import { useState } from "react";
import "./App.css";
import Tree from "./components/Tree";
import list from "./list.json";

function App() {
  const [state, setState] = useState({ data: list.data, expanded: [] });

  return (
    <div className="App">
      <h1>Rozwijana lista</h1>
      <h4>zadanie rekrutracyjne Softwarely</h4>
      <div>
        <Tree data={state.data} />
      </div>
    </div>
  );
}

export default App;
