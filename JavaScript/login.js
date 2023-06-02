const login = async (username, password) => {
  const loginInfo = { username, password }

  try {
    const res = await fetch("https://api.learnhub.thanayut.in.th/auth/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(loginInfo),
    })
    const data = await res.json()

    if (data.statusCode === 401) {
      alert(data.massage)
      return
    }
    return data.accessToken
  } catch (err) {
    console.log(err);
  }
}





const init = () => {
  const username = document.getElementById("username")
  const password = document.getElementById("password")
  const submit = document.getElementById("submit")

  submit.addEventListener('click', async (e) => {
    e.preventDefault
    if (!password.value || !username.value) {
      alert(("Please input something"))
      return
    }
    const accessToken = await login(username.value, password.value)

    if (!accessToken) return

    console.log(accessToken);

    localStorage.setItem("Token", accessToken)
  })

}
document.addEventListener
  ("DOMContentLoaded", () => {
    init()
  })
