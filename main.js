let countdownInterval = null;
let totalTime = 0;
let isPaused = false;

const countdownDisplay = document.getElementById('countdown_display');

const getTotalTime = () => {
	const hours = parseInt(document.getElementById('hours').value, 10) || 0;
	const minutes = parseInt(document.getElementById('minutes').value, 10) || 0;
	const seconds = parseInt(document.getElementById('seconds').value, 10) || 0;
	return hours * 3600 + minutes * 60 + seconds;
}

const formatTime = time => {
	const hours = Math.floor(time / 3600);
	const minutes = Math.floor((time % 3600) / 60);
	const seconds = time % 60;

	return `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(
		2,
		'0'
	)} : ${String(seconds).padStart(2, '0')}`
}

const startCountdown = () => {
	if (isPaused) {
		isPaused = false;
	} else {
		totalTime = getTotalTime();
	}

	if (countdownInterval) clearInterval(countdownInterval);

	countdownInterval = setInterval(() => {
		if (totalTime <= 0) {
			clearInterval(countdownInterval);
			countdownDisplay.innerHTML = '00 : 00 : 00';
			alert('Время вышло!');
		} else {
			totalTime--
			countdownDisplay.innerHTML = formatTime(totalTime);
		}
	}, 1000)
}

const pauseCountdown = () => {
	clearInterval(countdownInterval);
	isPaused = true;
}

const resetCountdown = () => {
	clearInterval(countdownInterval);
	totalTime = 0;
	countdownDisplay.innerHTML = '00 : 00 : 00';
	document.getElementById('hours').value = 0;
	document.getElementById('minutes').value = 0;
	document.getElementById('seconds').value = 0;
	isPaused = false;
}

document.getElementById('start_countdown').addEventListener('click', startCountdown);
document.getElementById('pause_countdown').addEventListener('click', pauseCountdown);
document.getElementById('reset_countdown').addEventListener('click', resetCountdown);
