import gravity from "./Gravity";

let spd;

export default class Ball {
  constructor(p, pos, mass, rad, massBall) {
    this.pos = pos;
    this.mass = mass;
    this.rad = rad;
    this.massBall = massBall;

    this.p = p;
    spd = p.createVector(0, 0);
  }

  show() {
    this.p.fill(131, 158, 68);
    this.p.circle(this.pos.x, this.pos.y, this.massBall * 4);
    this.p.fill(255);
    this.p.textAlign(this.p.CENTER, this.p.CENTER);
    this.p.text(this.massBall + " kg", this.pos.x, this.pos.y);
    //console.log(this.massBall);
  }

  update() {
    if (this.pos.y >= 500 - 10 - this.massBall * 2)
      this.pos.y = 500 - 10 - this.massBall * 2;
    else {
      spd.add(gravity(this.mass, this.rad, this.p));
      this.pos.add(spd);
    }

    //console.log(spd);

    if (
      this.pos.y > 300 - 10 - this.massBall * 2 &&
      this.pos.y < 300 - this.massBall * 2
    )
      console.log(spd);

    //if (this.p.mouseIsPressed) {}
  }
}
