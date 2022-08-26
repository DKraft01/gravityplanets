import gravity from "./Gravity";

let spd;

export default class Ball {
  constructor(p, pos, mass, rad) {
    this.pos = pos;
    this.mass = mass;
    this.rad = rad;

    this.p = p;
    spd = p.createVector(0, 0);
  }

  show() {
    this.p.fill(255, 0, 0);
    this.p.circle(this.pos.x, this.pos.y, 80);
    this.p.fill(255);
    this.p.textAlign(this.p.CENTER, this.p.CENTER);
    this.p.text("20 kg", this.pos.x, this.pos.y);
  }

  update() {
    spd.add(gravity(this.mass, this.rad, this.p));
    this.pos.add(spd);

    //if (this.p.mouseIsPressed) {}
  }
}
