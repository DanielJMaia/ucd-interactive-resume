function sendMail(contactForm) {
    var templateParams = {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    };
    
    emailjs.send("default_service", "daniel", templateParams)
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert("Email Sent Successfully!")
        },
        function(error) {
            console.log("FAILED", error);
            alert("Oops, seems like there was a problem. Try again later.")
        }
    );
    return false;  // To block from loading a new page
}