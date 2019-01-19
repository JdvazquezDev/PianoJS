//Reproducir el sonido hacienco clic con el ratón
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

//Reproducir el sonido usando teclas predeterminadas del teclado
document.addEventListener('keydown', event => {
	const key = event.key;
	const button = document.querySelector(`button[data-key="${key}"]`);
	if(button)//Evitar error de pulsar una tecla con valor null
		button.click(); //Trigger
});