function draw(n) {
  let line = ""
  for (let i = 0; i < n; i++) {
    line += "*"
  }
  for (let i = 0; i < n; i++) {
    console.log(line)
  }
}
draw(5)