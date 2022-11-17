function colorFunc() {
  let one = Math.floor(Math.random() * 255);
  let two = Math.floor(Math.random() * 255);
  let three = Math.floor(Math.random() * 255);
  let color = `rgb(${one}, ${two}, ${three})`
  document.body.style.backgroundColor = color;
}