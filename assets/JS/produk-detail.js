const imgslide = document.querySelector('.img-slide');
const imgbig = document.querySelector('.img-big');
const thumbs = document.querySelectorAll('.thumb');

imgslide.addEventListener('click', function(e) {
	if(e.target.className == 'thumb') {
		imgbig.src = e.target.src;
		imgbig.classList.add('fade');
		setTimeout(function() {
			imgbig.classList.remove('fade');
		},500);

		thumbs.forEach(function(thumb) {
			if(thumb.classList.contains('active')) {
				thumb.classList.remove('active');
			}
		})
		e.target.classList.add('active');


	}
})



const deskripsicontainer = document.querySelector('.deskripsicontainer')
const spesifikasicontainer = document.querySelector('.spesifikasicontainer')
const ulasancontainer = document.querySelector('.ulasancontainer')

const tabdeskripsi = document.querySelector('.deskripsi-tab');
const tabspesifikasi = document.querySelector('.spesifikasi-tab');
const tabulasan = document.querySelector('.ulasan-tab');



tabdeskripsi.addEventListener('click', function() {
	deskripsicontainer.style.display = "block";
	spesifikasicontainer.style.display = "none";
	ulasancontainer.style.display = "none";
	tabspesifikasi.classList.remove('actived');
	tabulasan.classList.remove('actived');
	tabdeskripsi.classList.add('actived');

});

tabspesifikasi.addEventListener('click', function() {
	spesifikasicontainer.style.display = "block";
	deskripsicontainer.style.display = "none";
	ulasancontainer.style.display = "none";
	tabdeskripsi.classList.remove('actived');
	tabspesifikasi.classList.add('actived');
	tabulasan.classList.remove('actived');
});


tabulasan.addEventListener('click', function() {
	deskripsicontainer.style.display = "none";
	spesifikasicontainer.style.display = "none";
	ulasancontainer.style.display = "block";
	tabdeskripsi.classList.remove('actived');
	tabspesifikasi.classList.remove('actived');
	tabulasan.classList.add('actived');
});