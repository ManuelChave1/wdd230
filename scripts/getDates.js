let date = new Date()
yearCopright = date.getFullYear()
document.getElementById("year").innerHTML = "© "+ yearCopright
document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified

const btn_humburguer = document.querySelector(".hamburger")
const nav_active_element = document.querySelector("#animateme")


const mode_element = document.querySelector(".mode")
const main_element = document.querySelector("main")



btn_humburguer.addEventListener('click', () => {
    nav_active_element.classList.toggle('open');
    btn_humburguer.classList.toggle('open');

});

mode_element-addEventListener('click',() => {
    if (mode_element.textContent.includes("🌞"))
         {
		main_element.style.background = "#242625";
		
		mode_element.textContent = "🌘";
	} else {
		main_element.style.background = "#F2F2F2";
		mode_element.textContent = "🌞";
	}
})