const clockContainer = document.querySelector('.clock-container')

const formatTime = time => `${String(time).length === 1 ? `0${time} :` : `${time} :`}`
const formatSecond = time => `${String(time).length === 1 ? `0${time}` : `${time}`}`

const updateClock = () => {
	const present = new Date();
	const hours = formatTime(present.getHours());
	const minutes = formatTime(present.getMinutes());
	const seconds = formatSecond(present.getSeconds());

	clockContainer.innerHTML = `
	<div class="back-clock">
		<span>${hours}</span>
		<span>${minutes}</span>
		<span>${seconds}</span>
	</div>`;
}

setInterval(updateClock, 1000);