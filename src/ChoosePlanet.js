import planetdata from "./planets.json";
import React, { useState } from "react";

export default function ChoosePlanet(props) {
  //const [Planet, setPlanet] = useState();
  const [Planetmass, setPlanetmass] = useState();

  const submiting = (e) => {
    e.preventDefault();
    let s = e.target[0].value;
    //setPlanet(e.target[0].value);

    props.setPlanet(planetdata[s].name);

    props.setPlanetMass(planetdata[s].m);
    props.setPlanetRadius(planetdata[s].r);

    console.log();
  };

  return (
    <div>
      <form action="" onSubmit={submiting}>
        <label>Choose Planet </label>

        <select id="planets">
          {planetdata.map((e) => {
            return (
              <option key={e.name} mass={e.m} radius={e.r} value={e.v}>
                {e.name}
              </option>
            );
          })}
          {/* <option value="Mercury">Mercury</option>
          <option value="Venus">Venus</option>
          <option defaultValue value="Earth">
            Earth
          </option>
          <option value="Mars">Mars</option>
          <option value="Jupiter">Jupiter</option>
          <option value="Saturn">Saturn</option>
          <option value="Uranus">Uranus</option>
          <option value="Neptune">Neptune</option> */}
        </select>
        <button type="submit">Travel</button>
      </form>
    </div>
  );
}
