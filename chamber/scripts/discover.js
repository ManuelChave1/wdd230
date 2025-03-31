
    
    const visitsDisplay = document.querySelector("#visit-message");
    
    const currentDate = Date.now();
    
    const lastVisit = localStorage.getItem("lastVisit");
    
    if (!lastVisit) {
       
        visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
    } else {
       
        const daysBetween = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));
        
        if (daysBetween < 1) {
        
            visitsDisplay.textContent = "Back so soon! Awesome!";
        } else {
          
            const dayText = daysBetween === 1 ? "day" : "days";
            visitsDisplay.textContent = `You last visited ${daysBetween} ${dayText} ago.`;
        }
    }

    localStorage.setItem("lastVisit", currentDate);
