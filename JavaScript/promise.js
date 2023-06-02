const getCourses = async () => {

  try {
    const response = await fetch("https://api.minireg.thanayut.in.th/courses")
    const data = await response.json()
    // courses = data.courses;
    data.courses.forEach((course) => {
      return course
    })
  } catch (err) {
    console.log(err)
  }
}
// getCourses()
function course(course) {
  course.forEach((course) => {
    const section = document.createElement("section")
    section.classList.add("course")
    section.innerHTML =
      `<section>${course.course.No}</section> 
    <h3>${course.courseNameTh}</h3>
    <p>${course.genEdType}</p>
    <p>${course.totalSeats}</p>
    `;
    // section.className = "course" 
    document.getElementById('main').appendChild(section)
  });
};
async function wing() {
  const course = await getCourses();
  course(course)
}
document.addEventListener("DOMContentLoaded", () => {
  wing();
});