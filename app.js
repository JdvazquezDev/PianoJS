
const buttons = document.querySelectorAll('button');

buttons.forEach(	
	button => button.addEventListener('click', playSound)
);

//Permite reproducir el sonido
function playSound(event) {
	const button = event.target;
	const note = button.dataset.note;

	const audio = document.getElementById(`audio${note}`);
	//No existe audio.stop()
	audio.pause();
	audio.currentTime = 0;
	audio.play();
}