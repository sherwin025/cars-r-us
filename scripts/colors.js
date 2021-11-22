import { getColors } from "./database.js"

const colors = getColors()


export const colorsHTML = ()  => {
    let html = "<h3>Available Colors</h3>"
    html += `<select id="colors">`
    html += `<option value="0">Select a Color</option>`

    for (const color of colors){
            html += `<option value="${color.id}">${color.color}</option>`
        }
    html += `</select>`
    return html
}  