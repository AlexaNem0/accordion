import React from "react";
import Dropdown from "./components/Dropdown";
import Catalog from "./components/Catalog";
import Input from "./components/Input";

function App() {
  return (
    <div className="App flex flex-col justify-center items-center h-screen m-auto gap-6">
      <Catalog />
      <Input />
      <Dropdown />
    </div>
  );
}

export default App;
