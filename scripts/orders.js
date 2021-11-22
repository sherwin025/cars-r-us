import { getColors, getInteriors, getOrders, getTechnology, getTypes, getWheels } from "./database.js";

const buildOrderListItem = (order) => {
    const color = getColors()
    const foundcolor = color.find(
        (color) => {
            return color.id === order.colorsId
        }
    )

    const wheel = getWheels()
    const foundwheel = wheel.find(
        (wheel) => {
            return wheel.id === order.wheelsId
        }
    )

    const interior = getInteriors()
    const foundinterior = interior.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )

    const technology = getTechnology()
    const foundtechnology = technology.find(
        (technology) => {
            return technology.id === order.technologyId
        }
    )

    let totalCost = foundcolor.price + foundinterior.price + foundwheel.price + foundtechnology.price

    const types = getTypes()
    const foundType = types.find(
        (type) => {
            return type.id === order.typeId
        }
    )

    totalCost = totalCost * foundType.pX


const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})
    return `<li>
    Order #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {
    const orders= getOrders()

    let html ="<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

