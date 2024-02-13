        // Retrieve form data from localStorage
        var name = localStorage.getItem("name");


        // Display form data
        document.getElementById("displayName").innerText = name;
        
        
        // Clear localStorage to remove stored form data
        localStorage.clear();


        // Reload the previous page after 3 seconds
// setTimeout(function() {
//     window.history.back();
// }, 3000); 
// Adjust the timeout value as needed



// Check if the form was submitted previously
if (sessionStorage.getItem("formSubmitted")) {
    // If the form was submitted previously, set a flag in session storage to indicate that
    sessionStorage.setItem("formSubmitted", true);
} else {
    // If the form was not submitted previously, set the flag to false
    sessionStorage.setItem("formSubmitted", false);
}

// Check if the page is being reloaded
if (performance.navigation.type === 1) {
    // If the page is being reloaded and the form was submitted previously, redirect to the main page
    if (sessionStorage.getItem("formSubmitted") === "true") {
        window.location.href = "index.html";
    }
}

