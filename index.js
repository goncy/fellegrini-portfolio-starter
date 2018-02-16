import { HashRouter } from "./node_modules/franxx/dist/franxx"

const home = document.getElementById('home')
const user = document.getElementById('user')

const router = new HashRouter()

router.on('/home', () => {
  user.className = ""
  home.className = "active"
})

router.on('/user', () => {
  user.className = "active"
  home.className = ""
})

router.start()