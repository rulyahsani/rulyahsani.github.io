const bank = document.getElementById('bank');
const select = document.querySelector('.select-bank');

const banking = document.getElementById('banking');
const netbanking = document.querySelector('.net-bank');

const elektronikmoney = document.getElementById('elektronik-money');
const moneyel = document.querySelector('.e-money');

bank.addEventListener('click', function() {
	select.style.display = "block";
	netbanking.style.display = "none";
	moneyel.style.display = "none";
	
	// alert('tes')
});
banking.addEventListener('click', function() {
	select.style.display="none";
	netbanking.style.display = "block";
	moneyel.style.display = "none";
})

elektronikmoney.addEventListener('click', function() {
	select.style.display="none";
	netbanking.style.display = "none";
	moneyel.style.display = "block";
})

