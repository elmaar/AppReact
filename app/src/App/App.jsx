import React from "react";
import './App.css';
import Button from "./components/ui/Button/Button";
function App() {
  return (
    <div className="App">
      <Button bgColor="skyblue">du texte children</Button>
      <Button bgColor="red">
        <div>text children node</div>
      </Button>
      <Button color="green">
        <div>text children node1</div>
        <div>text children node2</div>
      </Button>
    </div>
  );
}

export default App;
