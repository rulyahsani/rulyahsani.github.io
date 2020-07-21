const link = document.getElementById('line-link');
const petunjuk = document.querySelector('.petunjuk');
const link1 = document.getElementById('line-link1');
const petunjuk1 = document.querySelector('.petunjuk1');
const link2 = document.getElementById('line-link2');
const petunjuk2 = document.querySelector('.petunjuk2');

link.addEventListener('click', function() {
	petunjuk.style.display = "block";
	petunjuk1.style.display = "none";
	petunjuk2.style.display = "none";
})

link1.addEventListener('click', function() {
	petunjuk.style.display = "none";
	petunjuk1.style.display = "block";
	petunjuk2.style.display = "none";
})

link2.addEventListener('click', function() {
	petunjuk.style.display = "none";
	petunjuk1.style.display = "none";
	petunjuk2.style.display = "block";
})