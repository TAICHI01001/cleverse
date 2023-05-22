

function grade(score) {
  if (score < 0 || score > 100) {
    console.log("pleases input you score again");
    return
  }



  if (score <= 49) {
    console.log("grade F")
  }
  else if (score <= 59) {
    console.log("grade D")
  }
  else if (score <= 69) {
    console.log("grade C")
  }
  else if (score <= 79) {
    console.log("grade B")
  }
  else if (score > 80 || score <= 100) {
    console.log("grade A")
  }
  else {
    console.log("input you again")
  }
}
grade(81)

grade = (score) => {
  if (score <= 49) {
    console.log("grade F")
  }
  else if (score <= 59) {
    console.log("grade D")
  }
  else if (score <= 69) {
    console.log("grade C")
  }
  else if (score <= 79) {
    console.log("grade B")
  }
  else if (score > 80 || score <= 100) {
    console.log("grade A")
  }
  else {
    console.log("input you again")
  }
}
grade(74)

