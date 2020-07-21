const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
	nav.classList.toggle('slide');
});

const btncategory = document.querySelector('.category');
const dropmenu = document.querySelector('.dropmenu');

btncategory.addEventListener('mouseenter', function() {
	dropmenu.classList.toggle('tampilmenu');
})
document.addEventListener('click', function() {
	dropmenu.classList.remove('tampilmenu');
})
const body = document.querySelector('body');
const hamburger_menus = document.getElementById('hamburger-menus');
const hamburger = document.getElementById('hamburger');
const logo_menu = document.getElementById('logo_menu');
const menus = document.getElementById('menus');

hamburger.addEventListener('mouseenter', function() {
	hamburger_menus.style.display = "block";
	// hamburger_menus.style.opacity = "1";
	// hamburger_menus.style.transition = "1.5s ease-in-out";
		
})


document.addEventListener('click', function() {
	// hamburger_menus.style.display="none";
	hamburger_menus.classList.toggle('closed');
})



// var imgNumb = 1;
// setInterval(()=> {
// 	right();
// }, 5000);

// function right(){
// 	if(imgNumb != 4) {
// 		imgNumb += 1;
// 		changeImg(imgNumb, -1)
// 	} else {
// 		imgNumb = 1;
// 		changeImg(imgNumb, +2)
// 	}
// }

// function left() {
// 	if(imgNumb != 1) {
// 		imgNumb -= 1;
// 		changeImg(imgNumb, +1)
// 	} else {
// 		imgNumb=3;
// 		changeImg(imgNumb, -2)
// 	}
// }

// function changeImg(value, count) {
// 	document.getElementById(`img${value + count}`).style.opacity = '0';
// 	document.getElementById(`img${value}`).style.opacity = '1';
// 	document.getElementById(`circle${value + count}`).style.background = 'transparent';
// 	document.getElementById(`circle${value}`).style.background = 'white';
// }


