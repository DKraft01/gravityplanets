import "./App.css";
import ChoosePlanet from "./ChoosePlanet";
import Pfive from "./P5";
import React, { useState } from "react";

function App() {
  const [Planet, setPlanet] = useState("Earth");
  const [PlanetMass, setPlanetMass] = useState(5.972e24);
  const [PlanetRadius, setPlanetRadius] = useState(6371e3);

  return (
    <div className="container">
      <Pfive
        Planet={Planet}
        PlanetMass={PlanetMass}
        PlanetRadius={PlanetRadius}
      ></Pfive>
      <ChoosePlanet
        setPlanet={setPlanet}
        setPlanetMass={setPlanetMass}
        setPlanetRadius={setPlanetRadius}
      ></ChoosePlanet>
    </div>
  );
}

export default App;
