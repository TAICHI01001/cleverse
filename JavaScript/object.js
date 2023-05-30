// const school = {
//   student: [{ name: "TaiChi" }, { age: 19 }],
//   teacher: [{ name: "SomChai" }, { name: "Pong" }],
//   name: "Alex",
//   born: 2547,
//   address: undefined

// }
// console.log(school.student[1].age, school.student[0].name);

// console.log(school.name)
// console.log(school.born)

// console.log(school.address, school.foobar)
// console.log("address" in school, "foobar" in school)


// function people(arr) {
//   return arr.map((v) => people(v))
// }

const obj = {
  name: "TaiChi",
  age: 19,
  born: 2547,
  Company: "Cleaves Academy"
}

// for (z in obj) {
//   console.log(z, obj[z])
// }

const man = {
  student: [{
    name: "TaiChi",
    age: 19,
    born: 2547,
    fovTeacher: {
      name: "foo",
      age: 70,
      children: [
        
      ]
    }
  }, {
    name: "TaiChi2",
    age: 19,
    born: 2549
  }],
}
console.log(man.student[0].name, man.student[1].born, man.student[0].age)