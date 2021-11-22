import { getTypes } from "./database.js";

const types = getTypes()

export const typeHTML = ()  => {
    let html = "<h3>body styles</h3>"
    html += `<select id="types">`
    html += `<option value="0">Select a body style</option>`

    for (const type of types){
            html += `<option value="${type.id}">${type.type}</option>`
        }
    html += `</select>`
    return html
}  