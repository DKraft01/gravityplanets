import "./App.css";
import ChoosePlanet from "./ChoosePlanet";
import Pfive from "./P5";
import React, { useState } from "react";
import Earth from "./planets/image.jpg";

function App() {
  const [Planet, setPlanet] = useState("Earth");
  const [PlanetMass, setPlanetMass] = useState(5.972e24);
  const [PlanetRadius, setPlanetRadius] = useState(6371e3);
  const [BallMass, setBallMass] = useState(20);
  const [Pic, setPic] = useState(Earth);

  let g = parseFloat([(6.672e-11 * PlanetMass) / PlanetRadius ** 2]).toFixed(2);

  return (
    <div className="container">
      <h1>Gravity Simulator</h1>
      <div className="bg-img">
        <img alt="" src={Pic}></img>
        <Pfive
          Planet={Planet}
          PlanetMass={PlanetMass}
          PlanetRadius={PlanetRadius}
          BallMass={BallMass}
        ></Pfive>
        <div className="info">
          <h3>Info</h3>
          <p>Planet : {Planet}</p>
          <p>Mass : {PlanetMass} Kg</p>
          <p>Radius : {PlanetRadius} m</p>
          <p>Ball Mass : {BallMass} Kg</p>
          <p>Gravity : {g} m/s²</p>
          <p>Force : {BallMass * g} N</p>
        </div>
      </div>

      <ChoosePlanet
        setPic={setPic}
        setPlanet={setPlanet}
        setPlanetMass={setPlanetMass}
        setPlanetRadius={setPlanetRadius}
        setBallMass={setBallMass}
      ></ChoosePlanet>
    </div>
  );
}

export default App;
