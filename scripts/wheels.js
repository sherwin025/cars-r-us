import { getWheels } from "./database.js"

const wheels = getWheels()

export const WheelsHTML = () => {
    let html = "<h3>Available Wheels</h3>"
    html += `<select id="wheels">
    <option value="0">Select your Rims</option>`

    wheels.forEach(
        (Wheel) => {
            html += `<option value="${Wheel.id}">${Wheel.tire}</option>`
        }
    )
    html += `</select>`
    return html
} 