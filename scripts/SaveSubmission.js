import { saveSurveySubmission } from "./TransientState.js"

// handle submit button click
const handleSubmitButtonClick = (clickEvent) => {
    if (clickEvent.target.id === "saveSubmission") {
        saveSurveySubmission()
    }
}

// generate HTML for submit button and listen for click
export const SubmitButtonHTML = () => {
    document.addEventListener("click", handleSubmitButtonClick)
    
    return "<button id='saveSubmission'>Save Submission</button>"
}