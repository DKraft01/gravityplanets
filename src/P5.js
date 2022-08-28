import React from "react";
import Sketch from "react-p5";
import Ball from "./Ball";
import Bar from "./Bar";
import gravity from "./Gravity";
import { useState } from "react";

//simport logo from "../public/logo512.png";

let pos;
let b;
let bar;
let posBar;

export default function Pfive(props) {
  const [barY, setbarY] = useState(50);

  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    posBar = p5.createVector(500, 300);
    pos = p5.createVector(500, 50);

    p5.createCanvas(1000, 600).parent(canvasParentRef);
    //if (props.Planet === "Earth") p5.image(backgroundImage, 0, 0);
    //backgroundImage = p5.loadImage(mars);
    //p5.background(backgroundImage);
    //p5.redraw();
    //backgroundImage = p5.loadImage(mars);
  };

  const draw = (p5) => {
    p5.background(20);
    p5.noStroke();
    p5.push();
    p5.fill(128, 0, 0);
    p5.rect(p5.width / 2, 610, 1000, 200);
    p5.pop();

    bar = new Bar(
      p5,
      posBar,
      barY,
      props.PlanetMass,
      props.PlanetRadius,
      props.BallMass
    );
    //p5.image(backgroundImage, 0, 0);

    //else
    //p5.background(0);

    // if (barY > 300 - 10 - props.BallMass * 2 && barY < 300 - props.BallMass * 2)
    //   console.log("holi");

    //p5.frameRate(50);
    // console.log(p5.frameRate());

    if (gravity !== null && b !== undefined) {
      b.show();
      b.update();
    }
    if (gravity !== null && bar !== undefined) {
      bar.show();
      bar.update();
    }
    //p5.print(pos);
    if (b !== undefined) setbarY(b.pos.y);

    if (p5.mouseIsPressed) {
      if (
        p5.mouseX > 0 &&
        p5.mouseX < p5.width &&
        p5.mouseY > 0 &&
        p5.mouseY < p5.height
      ) {
        pos = p5.createVector(500, 50);
        b = new Ball(
          p5,
          pos,
          props.PlanetMass,
          props.PlanetRadius,
          props.BallMass
        );
      }
    }
  };

  return <Sketch setup={setup} draw={draw} />;
}
