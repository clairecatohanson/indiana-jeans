import { setSocioLocationId } from "./TransientState.js"

const handleLocationChange = (radioEvent) => {
    if (radioEvent.target.name === "location") {
        const convertedToNumber = parseInt(radioEvent.target.value)
        setSocioLocationId(convertedToNumber)
    }
}

export const LocationTypeHTML = async () => {
    const response = await fetch("http://localhost:8088/socioLocations")
    const locationsArray = await response.json()

    document.addEventListener("change", handleLocationChange)

    let html = "<section class='component'><h2>Which type of area do you live in?</h2>"
    for (const location of locationsArray) {
        html += `<input type='radio' name='location' value='${location.id}'/>  ${location.label}`
    }
    html += "</section>"
    return html
}