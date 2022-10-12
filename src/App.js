import React from "react";
import Container from "./Components/Container";
import DoublingGrid from "./Components/DoublingGrid";
import DoublingStackable from "./Components/DoublingStackable";
import ResponsiveItem from "./Components/ResponsiveItem";
import ResponsiveMenu from "./Components/ResponsiveMenu";
import StackableGrid from "./Components/StackableGrid";
import TextContainer from "./Components/TextContainer";
const App = () => {
  return (
    <div className="app">
      <h1>Responsive UI</h1>
      <h4>Container</h4>
      <Container />
      <h4>Text Container</h4>
      <TextContainer />
      <h4>Stackable Grid</h4>
      <StackableGrid />
      <h4>Doubling Grid</h4>
      <DoublingGrid />
      <h4>Doubling Stackable Grid</h4>
      <DoublingStackable />
      <h4>Responsive Item</h4>
      <ResponsiveItem />
      <h4>Responsive Menu</h4>
      <ResponsiveMenu/>

    </div>
  );
};

export default App;
