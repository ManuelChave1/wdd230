
let date = new Date()
yearCopright = date.getFullYear()
document.getElementById("year").innerHTML = "© "+ yearCopright
document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified

const btn_humburguer = document.querySelector(".hamburger")
const nav_active_element = document.querySelector("#animateme")
const mode_element = document.querySelector(".mode")
const main_element = document.querySelector("main")
const list_element = document.querySelector(".list")
const heroOverlay = document.querySelector(".hero-overlay");

btn_humburguer.addEventListener('click', () => {
    nav_active_element.classList.toggle('open');
    btn_humburguer.classList.toggle('open');

});

mode_element.addEventListener('click', () => {
    if (mode_element.textContent.includes("🌞")){
		main_element.style.background = "#242625";			
		list_element.style.color ="#F2F2F2";
		heroOverlay.style.backgroundColor = "#000000";
		mode_element.textContent = "🌘";
	} else {
		main_element.style.background = "";   
		list_element.style.color =" black";
		heroOverlay.style.backgroundColor = "#0b0c0d";
		mode_element.textContent = "🌞";
	}
})

setupVisitCounter()


function setupVisitCounter() {
    const visitDisplay = document.getElementById("visit-counter");
    
    if (visitDisplay) {
       
        let numVisits = Number(localStorage.getItem("visits")) || 0;

        numVisits++;

        visitDisplay.textContent = `Page visits: ${numVisits}`;
 
        localStorage.setItem("visits", numVisits);
    }
}
	

