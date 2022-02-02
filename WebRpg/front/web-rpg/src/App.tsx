import React from "react";
import GetItens from "./components/getItens";
import "./global.css";

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1 >Lista Itens RPG do Padoca</h1>
      </div>
      <div className="table">
        <GetItens />
      </div>
    </div>
  );
}

export default App;
