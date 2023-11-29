import { setOwnsBlueJeans } from "./TransientState.js"

// track user's choice
const handleOwnJeansChange = (radioEvent) => {
    if (radioEvent.target.name === "ownJeans") {
        const convertedToBoolean = JSON.parse(radioEvent.target.value)
        setOwnsBlueJeans(convertedToBoolean)
    }
}

// generate HTML for Own Jeans Component
export const OwnJeansHTML = () => {
    document.addEventListener("change", handleOwnJeansChange)
    
    let html = "<section class='component'><h2>Do you own a pair of blue jeans?</h2>"
    html += "<input type='radio' name='ownJeans' value='true'/>  Yes"
    html += "<input type='radio' name='ownJeans' value='false'/>  No"
    html += "</section>"
    return html
}