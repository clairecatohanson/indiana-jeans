import { OwnJeansHTML } from "./OwnJeans.js"
import { LocationTypeHTML } from "./LocationTypes.js"
import { SubmitButtonHTML } from "./SaveSubmission.js"
import { SubmissionList } from "./Submissions.js"

const container = document.querySelector(".container")

const render = async () => {
    const jeansHTML = OwnJeansHTML()
    const locationsHTML = await LocationTypeHTML()
    const buttonHTML = SubmitButtonHTML()
    const submissionsHTML = await SubmissionList()
    
    container.innerHTML = `
        ${jeansHTML}
        ${locationsHTML}
        ${buttonHTML}
        ${submissionsHTML}
    `
}

document.addEventListener("surveySubmissionSent", render)

render()