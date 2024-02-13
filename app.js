document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get form values
    var name = document.getElementById("name").value;
    
    // Store form data in localStorage
    localStorage.setItem("name", name);
    
    // Redirect to display page
    window.location.href = "msg.html";
});


