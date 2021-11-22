const database = {
    colors: [
        {id: 1, color: "silver", price: 21.04},
        {id: 2, color: "midnight blue", price: 12.36},
        {id: 3, color: "firebrick red", price: 50.12},
        {id: 4, color: "spring green", price: 38.94}
    ], 
    interiors: [
        {id: 1, type: "beige fabric", price: 124.23},
        {id: 2, type: "charcoal fabric", price: 345.34},
        {id: 3, type: "white leather", price: 200.52},
        {id: 4, type: "black leather", price: 241.02}
    ],
    technology: [
        {id: 1, package: "Basic Package (basic sound system)", price: 529.99},
        {id: 2, package: "Navigation Package (includes integrated navigation controls)", price: 824.23},
        {id: 3, package: "Visibility Package (includes side and reat cameras)", price: 322.53},
        {id: 4, package: "Ultra Package (includes navigation and visibility packages)", price: 1000.00}
    ],
    wheels: [
        {id: 1, tire: "17-inch Pair Radial", price: 599.99},
        {id: 2, tire: "17-inch Pair Radial Black", price: 699.99},
        {id: 3, tire: "18-inch Pair Spoke Silver", price: 549.99},
        {id: 4, tire: "18-inch Pair Spoke Black", price: 649.99},
    ],
    customer: [
        {id: 1, firstName: "John", lastName: "pale", email: "carissues@gmail.com", address: "123 main st pawtucket ri 02861", phoneNumber: 123-123-1234},
        {id: 2, firstName: "John", lastName: "mack", email: "carissues@gmail.com", address: "123 main st pawtucket ri 02861", phoneNumber: 123-123-1234},
        {id: 3, firstName: "John", lastName: "wack", email: "carissues@gmail.com", address: "123 main st pawtucket ri 02861", phoneNumber: 123-123-1234}
    ],
    orders: [
        { id: 1, customerId: 3, wheelsId: 2, technologyId: 4, interiorId: 1, colorsId: 3, typeId: 1}
    ],
    customOrder: {},
    types: [
        {id: 1, type: "Car", pX: 1},
        {id: 2, type: "SUV", pX: 1.5},
        {id: 3, type: "Truck", pX: 2.25}
    ]
}

export const getColors = () => {
    return database.colors.map(color => ({...color}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnology = () => {
    return database.technology.map(tech => ({...tech}))
}

export const getWheels = () => {
    return database.wheels.map(wheel=> ({...wheel}))
}

export const getCustomer= () => {
    return database.customer.map(customer => ({...customer}))
}

export const getOrders= () => {
    return database.orders.map(order => ({...order}))
}

export const getTypes= () => {
    return database.types.map(type => ({...type}))
}

export const setColor = (id) => {
    database.customOrder.colorsId = id
}
export const setWheel = (id) => {
    database.customOrder.wheelsId = id
}
export const setInterior = (id) => {
    database.customOrder.interiorId = id
}
export const setTechnology = (id) => {
    database.customOrder.technologyId =id
}

export const setType = (id) => {
    database.customOrder.typeId =id
}

export const AddOrder = () => {
    const newOrder = {...database.customOrder}

    const lastIndex = database.orders.length -1
    newOrder.id = database.orders[lastIndex].id + 1

    newOrder.timestamp = Date.now()

    database.orders.push(newOrder)

    database.customOrder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}