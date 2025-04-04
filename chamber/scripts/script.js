
let dat = new Date()
document.querySelector("#last-modified").innerHTML = "Last Modified: " + document.lastModified

document.addEventListener("DOMContentLoaded", function() {
    // Set the timestamp when the form loads
    const timestampField = document.getElementById("timestamp");
    if (timestampField) {
        timestampField.value = Date.now();
    }
    
    // Add current year to footer copyright if it exists
    const yearSpan = document.querySelector('.footer span');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // Update last modified date if it exists
    const lastModified = document.getElementById('last-modified');
    if (lastModified) {
        lastModified.textContent = `Last Modified: ${document.lastModified}`;
    }
});