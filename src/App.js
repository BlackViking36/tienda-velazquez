import React from "react";
import ItemCount from "./Components/ItemCount";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";

function App() {

  const onAdd = (count) => {
    alert(`sumaste ${count} productos`);
  }

  return (
    <>
      <NavBar />
      <ItemListContainer greetings={"BIENVENIDO A LA TIENDA"} />
      <ItemCount initial={1} max={10} onAdd={onAdd} />
    </>
  );
};

export default App;
