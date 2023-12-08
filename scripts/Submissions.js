export const SubmissionList = async () => {
    // Get the submissions from your API
    const response = await fetch("http://localhost:8088/submissions")
    const submissionsArray = await response.json()
    console.log(submissionsArray)

    // Iterate the submissions and create some <section> representations
    let html = "<div class='submissions'><h2>List of Submissions</h2>"
    // for (const submission of submissionsArray) {
    //     html += `
    //         <section class='submission'>
    //             <span class='submission__component'>Owns Jeans? ${submission.ownsBlueJeans}</span>
    //             <span class='submission__component'>Area type foreign key? ${submission.socioLocationId}</span>
    //         </section>
    //     `
    // }
    const submissionHtmlStringArray = submissionsArray.map(submission => {
        return `
            <section class='submission'>
                <span class='submission__component'>Owns Jeans? ${submission.ownsBlueJeans}</span>
                <span class='submission__component'>Area type foreign key? ${submission.socioLocationId}</span>
            </section>
        `
    })
    html += submissionHtmlStringArray.join('')
    html += "</section>"
    
    // Return the HTML string
    return html
}