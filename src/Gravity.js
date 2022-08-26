const gravity = (m_, r_, p) => {
  let m, r;
  const gconst = 6.672e-11;

  m = m_;
  r = r_;

  let g = [(gconst * m) / r ** 2] / 100;
  if (p !== undefined) {
    let gv = p.createVector(0, g);
    return gv;
  }
};

export default gravity;
