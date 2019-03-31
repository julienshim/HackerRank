function sockMerchant(n, ar) {
  let unique = [];

  ar.forEach(function(n) {
    if (!unique.includes(n)) {
      unique.push(n);
    }
  });

  let pairs = 0;

  unique.forEach(function(m) {
    let freq = 0;
    ar.forEach(function(n) {
      if (n === m) {
        freq++;
      }
    });
    pairs += (freq - (freq % 2)) / 2;
  });

  return pairs;
}

// Not sure why HackerRank included n
