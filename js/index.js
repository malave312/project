/* Show/Hide Button  of list-1 */
const showButton = document.getElementById('show');
const hideButton = document.getElementById('hide');
const list1 = document.getElementById('list-1');

const media = window.matchMedia("(max-width: 650px)");
const btnNavAdd = document.getElementById('i-list');
const btnNavHide = document.getElementById('i-list-x');

const navbarHeaderAdd = () => {
	// document.querySelector('.header-navbar-container-group').classList.add('d-block');
	document.getElementById('action').classList.replace('none', 'd-block');
	document.getElementById('i-list').classList.add('d-none');
	document.getElementById('i-list-x').classList.remove('d-none');
}

const navbarHeaderHide = () => {
	document.getElementById('action').classList.replace('d-block', 'none');
	document.getElementById('i-list-x').classList.add('d-none');
    document.getElementById('i-list').classList.remove('d-none');
}

btnNavAdd.addEventListener("click", () => {
	navbarHeaderAdd();
});

btnNavHide.addEventListener("click", () => {
	navbarHeaderHide();
});


/* Boton de navbar */
showButton.addEventListener("click", () => {
	showList1();
});

hideButton.addEventListener("click", () => {
	hideList1();
});

const showList1 = () => {
	list1.style.display = "block";
	hideButton.style.display = "block";
	showButton.style.display = "none";
};
const hideList1 = () => {
	list1.style.display = "none";
	hideButton.style.display = "none";
	showButton.style.display = "block";
};

if(media.matches) {
	$('.slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1
	});
}

media.onchange = (e) => {
	if(e.matches) {
		$('.slider').slick({
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1
		});
	} else {			
		$('.slider').slick('unslick');
	}
}

/* First menu */
function menuShow(num) {
	document.getElementById("subsection" + num).style.display = "block";
	document.getElementById("arrow" + num).classList.replace("bi-chevron-right", "bi-chevron-up");
}

function menuHidden(num) {
	document.getElementById("subsection" + num).style.display = "none";
	document.getElementById("arrow" + num).classList.replace("bi-chevron-up", "bi-chevron-right");
}

/* Second menu */
function submenushow(number) {
	document.getElementById("section" + number).style.display = "block";
	document.getElementById("actionshow" + number).style.display = "none";
	document.getElementById("actionhidden" + number).style.display = "block";
}

function submenuhidden(number) {
	document.getElementById("section" + number).style.display = "none";
	document.getElementById("actionhidden" + number).style.display = "none";
	document.getElementById("actionshow" + number).style.display = "block";
}