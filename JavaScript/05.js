const input = document.getElementById('inputs')
const button = document.getElementById('buttons')
const ol = document.getElementById('ols')

button.addEventListener('click', (e) => {
  e.preventDefault()
  const newOl = document.createElement('li')
  newOl.textContent = input.value
  ol.appendChild(newOl)
  input.value = ""


  newOl.addEventListener("click", function () {
    newOl.parentNode.removeChild(newOl); // Remove the clicked task item
  });


})


