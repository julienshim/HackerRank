function gameOfThrones(s) {
  const key = {};
  const odds = [];
  for (let i = 0; i < s.length; i += 1) {
      const k = s[i];
      if (k in key) {
          key[k] += 1
      } else {
          key[k] = 1
      }
  }
  for (let k in key) {
      if (key[k] % 2 === 1) {
          odds.push(k)
      }
  }
  return odds.length > 1 ? 'NO' : 'YES'
 }