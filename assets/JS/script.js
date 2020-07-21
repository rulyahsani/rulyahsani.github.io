
// Get the modal
// 
// 
// 

const btn = document.getElementById('id01');
const btn_close = document.getElementById('id01');


function open_modal() {
	btn.style.display="inline";

}

function close_modal() {
	btn_close.style.display='none'
}

// sidepanel
	const btnpanelopen = document.getElementById('sidepanel');
	const btnpanelclose = document.getElementById('sidepanel');
	const main = document.getElementById('main');

	function openNav() {
		btnpanelopen.style.width = "300px";
		main.style.width = "300px";
	}

	function closeNav() {
		btnpanelclose.style.width = "0";
		main.style.width = "0";
	}


var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


