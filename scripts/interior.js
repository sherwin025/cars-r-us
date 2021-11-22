import { getInteriors } from "./database.js"

const interiors = getInteriors()

export const interiorHTML = () => {
    let html = "<h3>Available interiors</h3>"
    html += `<select id="interiors">
    <option value="0">Select an Interior</option>`

    interiors.forEach(
        (interior) => {
            html += `<option value="${interior.id}">${interior.type}</option>`
        }
    )
    html += `</select>`
    return html
} 