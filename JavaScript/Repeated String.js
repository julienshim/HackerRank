function repeatedString(s, n) {
  let aCount = 0;
  let difference = 0;
  let remainder = n % s.length;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      aCount++;
      if (i < remainder) {
        difference++;
      }
    }
  }
  let totalA = ((n - remainder) / s.length) * aCount;
  return totalA + difference;
}
