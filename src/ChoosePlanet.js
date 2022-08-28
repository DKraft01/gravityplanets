import planetdata from "./planets.json";
import React, { useState } from "react";

export default function ChoosePlanet(props) {
  const [V, setV] = useState(8);

  const [Planetinfo, setPlanetinfo] = useState({
    v: V,
    photo:
      "https://www.wallpaperflare.com/static/310/762/497/landscape-planet-science-fiction-fantasy-art-wallpaper.jpg",
  });
  const [PlanetData, setPlanetData] = useState(planetdata);
  //const [PlanetRadius, setPlanetRadius] = useState();

  const submiting = (e) => {
    e.preventDefault();
    let s = e.target[0].value;
    //setPlanet(e.target[0].value);

    props.setPlanet(PlanetData[s].name);
    props.setPic(PlanetData[s].photo);

    props.setPlanetMass(PlanetData[s].m);
    props.setPlanetRadius(PlanetData[s].r);
  };
  //setPlanetinfo({ ...Planetinfo, [e.target.name]: e.target.value });
  const createPlanet = (e) => {
    setPlanetinfo((Planetinfo) => ({
      ...Planetinfo,
      [e.target.name]: e.target.value,
    }));
    //console.log(Planetinfo);
  };

  // setPlanetData((PlanetData) => ({
  //   ...PlanetData,
  //   Planetinfo,
  // }));
  const submitPlanet = (e) => {
    Planetinfo.v = V;
    setV(V + 1);

    e.preventDefault();
    setPlanetData([...PlanetData, Planetinfo]);

    console.log(V);
  };

  return (
    <div>
      <form action="" onSubmit={submiting}>
        <label>Choose Planet </label>

        <select id="planets">
          {PlanetData.map((e) => {
            return (
              <option key={e.v} mass={e.m} radius={e.r} value={e.v}>
                {e.name}
              </option>
            );
          })}
        </select>
        <input
          type="number"
          required
          placeholder="Ball mass"
          min="1"
          max="100"
          style={{ width: "70px" }}
          onChange={(e) => {
            if (e.target.value > 0) props.setBallMass(e.target.value);
          }}
        ></input>
        <button className="travelButton" type="submit">
          Travel
        </button>
      </form>
      <form onSubmit={submitPlanet}>
        Create planet
        <input
          type="text"
          onChange={createPlanet}
          placeholder="Planet name"
          name="name"
          required
        ></input>
        <input
          type="number"
          required
          min="1"
          name="m"
          placeholder="Planet mass"
          onChange={createPlanet}
        ></input>
        <input
          type="number"
          required
          placeholder="Planet radius"
          name="r"
          min="1"
          onChange={createPlanet}
        ></input>
        <button className="createPlanetButton" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}
