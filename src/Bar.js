export default class Bar {
  constructor(p, pos, barY) {
    this.pos = pos;
    this.barY = barY;

    this.p = p;
    //spd = p.createVector(0, 1);
  }

  show() {
    if (this.barY > 350 - 40) this.p.fill(255, 0, 0);
    else {
      this.p.fill(255);
    }
    this.p.rectMode(this.p.CENTER, this.p.CENTER);
    this.p.rect(this.pos.x, this.pos.y, 100, 20);
    //this.p.print(this.barY);
  }

  update() {
    //spd.add(gravity(this.mass, this.rad, this.p));
    //this.pos.add(spd);
    //if (this.p.mouseIsPressed) {}
  }
}
