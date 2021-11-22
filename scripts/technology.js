import { getTechnology } from "./database.js"

const technology = getTechnology()

export const technologyHTML = () => {
    let html = "<h3>Available technology</h3>"
    html += `<select id="technology">
    <option value="0">Select a package</option>`

    technology.forEach(
        (technologys) => {
            html += `<option value="${technologys.id}">${technologys.package}</option>`
        }
    )
    html += `</select>`
    return html
} 