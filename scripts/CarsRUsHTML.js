import { typeHTML } from "./carType.js"
import { colorsHTML } from "./colors.js"
import { setColor, setInterior, setTechnology, setWheel, AddOrder, setType } from "./database.js"
import { interiorHTML } from "./interior.js"
import { Orders } from "./orders.js"
import { technologyHTML } from "./technology.js"
import { WheelsHTML } from "./wheels.js"

Orders()
const colorHTML = colorsHTML()
const interiorsHTML = interiorHTML()
const technologysHTML = technologyHTML()
const WheelHTML = WheelsHTML()
const typesHTML = typeHTML()

document.addEventListener(
    "change",
    (changeEvent) => {
        switch(changeEvent.target.id){
        case "wheels":
            setWheel(parseInt(changeEvent.target.value))
            break;
        case "technology":
            setTechnology(parseInt(changeEvent.target.value))
            break;
        case "colors":
            setColor(parseInt(changeEvent.target.value))
            break;
        case "interiors":
            setInterior(parseInt(changeEvent.target.value))
            break;
        case "types":
            setType(parseInt(changeEvent.target.value))
            break;
        }
    }
)


document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "button"){
            AddOrder()
        }
    }
)

export const allHTml = () => {
return ` <h1>Cars-R-Us</h1>
${colorHTML}
${interiorsHTML}
${technologysHTML}
${WheelHTML}
${typesHTML}
<article class="button">
    <button id="button">Create your Package</button>
</article>
<article class="customOrders">
            <h2>Custom Car Package</h2>
            <div>${Orders()}</div>
        </article>
`}