import React from "react";
import Sketch from "react-p5";
import Ball from "./Ball";
import Bar from "./Bar";
import gravity from "./Gravity";
import { useState } from "react";

let pos;
let b;
let bar;
let posBar;

export default function Pfive(props) {
  const [barY, setbarY] = useState(50);

  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    posBar = p5.createVector(500, 350);
    pos = p5.createVector(500, 50);

    p5.createCanvas(1000, 500).parent(canvasParentRef);
  };

  const draw = (p5) => {
    bar = new Bar(p5, posBar, barY);
    //if (props.Planet == "Mercury") p5.background(255, 0, 5);
    //else
    p5.background(0);

    if (gravity !== null && b !== undefined) {
      b.show();
      b.update();
    }
    if (bar !== undefined) {
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
        b = new Ball(p5, pos, props.PlanetMass, props.PlanetRadius);
      }
    }
  };

  function mousePressed(p5) {}

  return <Sketch setup={setup} draw={draw} mousePressed={mousePressed} />;
}
