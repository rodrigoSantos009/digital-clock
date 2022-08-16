const hourElement = document.getElementById('hour')
const minuteElement = document.getElementById('minutes')
const secondElement = document.getElementById('seconds')

function updateClock() {
    let hour = new Date().getHours()
    let minutes = new Date().getMinutes()
    let seconds = new Date().getSeconds()
    
    hour = hour < 10 ? "0" + hour : hour
    minutes =  minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds;

    hourElement.innerHTML = hour
    minuteElement.innerHTML = minutes
    secondElement.innerHTML = seconds

    setTimeout(() => {
        updateClock()
    }, 1000)

}

updateClock();