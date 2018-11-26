function countingValleys(n, s) {
  let elevation = 0;
  let valley = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "U") {
      elevation++;
      if (elevation === 0) {
        valley++;
      }
    } else {
      elevation--;
    }
  }
  return valley;
}
