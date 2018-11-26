function jumpingOnClouds(c) {
  let jump = 0;
  let skip = 0;
  for (let i = 0; i < c.length; i++) {
    if (c[i] === 1) {
      jump++;
      skip = 0;
    } else {
      skip++;
      if (skip === 2) {
        skip = 0;
        jump++;
      }
    }
  }
  return jump;
}
