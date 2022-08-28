import gravity from "./Gravity";

let spdBar = 0;
let g;
//let bm;
//let time = 0;
//let t_;
let spd2;
let flag = 0;

export default class Bar {
  constructor(p, pos, barY, mass, radius, BallMass) {
    this.pos = pos;
    this.barY = barY;
    this.mass = mass;
    this.radius = radius;
    this.BallMass = BallMass;

    this.p = p;
    //spdBar = p.createVector(0, 0);
    //time = this.p.millis();
  }

  show() {
    if (this.pos) {
      this.p.rectMode(this.p.CENTER, this.p.CENTER);
      this.p.rect(this.pos.x, this.pos.y, 100, 20);
      this.p.textAlign(this.p.CENTER, this.p.CENTER);
      this.p.push();
      this.p.fill(255, 0, 0);
      this.p.text("10 kg", this.pos.x, this.pos.y);
      this.p.pop();
      //this.p.print(this.barY);
    }
  }

  update() {
    g = gravity(this.mass, this.radius, this.p);

    if (spd2 !== undefined) spd2.add(g);
    if (this.BallMass > 100) this.BallMass = 100;
    if (this.BallMass === undefined) this.BallMass = 20;
    if (this.barY > 300 - 10 - this.BallMass * 2 && this.pos) {
      if (this.pos.y >= 500) this.pos.y = 500;
      else {
        //bm = g.y * t_ * this.BallMass;
        if (flag === 0) {
          spdBar = spdBar + g.y + spd2.y;
          //spdBar = spdBar + g.y + spd2.y * this.BallMass;
          //flag = 1;
          //console.log(spd2);
        } else {
          spdBar = spdBar + g.y;

          console.log(spdBar);
        }

        //console.log(spdBar);
        this.pos.y = this.pos.y + spdBar;
      }
    } else {
      if (this.pos) this.pos.y = 300;
      // t_ = (this.p.millis() - time) / 1000;
      //if (time !== undefined) console.log(t_);

      //time = this.p.millis();
    }
    //spd.add(gravity(this.mass, this.rad, this.p));
    //this.pos.add(spd);
    if (this.p.mouseIsPressed) {
      spdBar = 0;
      //time = this.p.millis();
      spd2 = this.p.createVector(0, 0);
      flag = 0;
    }
  }
}
