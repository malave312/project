// const menu = document.getElementById('show-menu');
// const submenu = document.querySelectorAll('ul');

// menu.addEventListener("click", () => {
	// menuShow(number);
// })


function menuShow(num) {
	document.getElementById("subsection" + num).style.display = "block";
}

function menuHidden(num) {
	document.getElementById("subsection" + num).style.display = "none";
}