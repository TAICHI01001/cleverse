const frontendInput = document.getElementById("inputFont")

const frontendButton = document.getElementById("addFont")

const frontendMilestonesList = document.getElementById("orderFont")

frontendButton.addEventListener("click", (e) => {
  e.preventDefault()

  const newList = document.createElement("li")
  newList.textContent = frontendInput.value

  frontendMilestonesList.appendChild(newList)


})

const backendInput = document.getElementById("inputBack")

const backendButton = document.getElementById("addBack")

const backendMilestonesList = document.getElementById("orderBack")

backendButton.addEventListener("click", (e) => {
  e.preventDefault()

  const newList = document.createElement("li")

  newList.textContent = backendInput.value

  backendMilestonesList.appendChild(newList)
})