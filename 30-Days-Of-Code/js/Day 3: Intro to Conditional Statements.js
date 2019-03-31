function readLine() {
  let current = parseInt(inputString[currentLine++]);
  if (current % 2 === 1) {
      console.log('Weird');
  } else {
      current >= 6 && current <= 20 ? console.log('Weird') : console.log('Not Weird')
  }
}
