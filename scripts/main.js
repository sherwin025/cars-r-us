import { allHTml } from "./CarsRUsHTML.js"

const mainContainer = document.querySelector("#container")
const renderHTML = () => {
    mainContainer.innerHTML = allHTml()
} 

renderHTML()

document.addEventListener(
    "stateChanged",
    event => {
        renderHTML()
    }
)
