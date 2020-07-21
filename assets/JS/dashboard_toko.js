// const sidebar = document.querySelector('.sidebar');
// const bodyright = document.querySelector('.body-right');
// const contentleft = document.querySelector('.content-left');

// sidebar.addEventListener('mouseenter', function() {
// 	bodyright.style.marginLeft="300px";
// 	bodyright.style.transition="1s";
// 	contentleft.style.width="600px";

// })
// sidebar.addEventListener('mouseleave', function() {
// 	bodyright.style.marginLeft="100px";
// 	contentleft.style.width="800px";
// })

// const hamburger_menus = document.getElementById('hamburger-menus');
// const hamburger = document.getElementById('hamburger');
// const logo_menu = document.getElementById('logo_menu');
// const menus = document.getElementById('menus');

// hamburger.addEventListener('mouseenter', function() {
// 	hamburger_menus.style.display = "block";
	
		
// })


// document.addEventListener('click', function() {
// 	// hamburger_menus.style.display="none";
// 	hamburger_menus.classList.toggle('closed');
// })


const fa_home = document.getElementById('fa-home');
const id_home = document.getElementById('id_home');
const fa_book = document.getElementById('fa-book');
const id_book = document.getElementById('id_book');
const fa_box = document.getElementById('fa-box');
const id_box = document.getElementById('id_box');
const fa_cart = document.getElementById('fa-cart');
const id_cart = document.getElementById('id_cart');
const fa_cog = document.getElementById('fa-cog');
const id_cog = document.getElementById('id_cog');

fa_home.addEventListener('mouseenter', function() {
	id_home.style.opacity = "1";
})
fa_book.addEventListener('mouseenter', function() {
	id_book.style.opacity = "1";
})
fa_box.addEventListener('mouseenter', function() {
	id_box.style.opacity = "1";
})
fa_cart.addEventListener('mouseenter', function() {
	id_cart.style.opacity = "1";
})
fa_cog.addEventListener('mouseenter', function() {
	id_cog.style.opacity = "1";
})
function closed() {
	id_home.style.opacity = "0";
	id_book.style.opacity = "0";
	id_box.style.opacity = "0";
	id_cart.style.opacity = "0";
	id_cog.style.opacity = "0";
	id_home.style.transition = "0.7s";
	id_book.style.transition = "0.7s";
	id_box.style.transition = "0.7s";
	id_cart.style.transition = "0.7s";
	id_cog.style.transition = "0.7s";
}
fa_home.addEventListener('mouseleave', closed);
fa_book.addEventListener('mouseleave', closed);
fa_box.addEventListener('mouseleave', closed);
fa_cart.addEventListener('mouseleave', closed);
fa_cog.addEventListener('mouseleave', closed);

