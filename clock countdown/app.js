const timecount = document.getElementById('timecount')


const later = new Date('06/12/2022')

const second = 1000
const minute = second * 60
const hour = minute * 60 

const day =hour * 24

let timeId


function countDown() {
const  today = new Date()
const timeLeft = later - today
 


if (timeLeft<=0) {
    timecount.innerHTML = 'Democracy day'
    clearInterval(timeId)
    return
}

else if (timeLeft<=0) {//if you want if
    timecount.innerHTML = 'CONGRATULATIONS!!!'
    clearInterval(timeId)
    return
}

const days = Math.floor(timeLeft/day)
const hours =Math.floor((timeLeft % day) / hour)
const minutes =Math.floor((timeLeft % hour) / minute)
const seconds =Math.floor((timeLeft % minute) / second)
timecount.innerHTML = days + 'days' + hours +'hours' + minutes + 'minutes' + seconds + 'second' 


}
timeId = setInterval(countDown,second)
