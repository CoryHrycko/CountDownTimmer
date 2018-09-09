
let countDownDate = new Date("Oct 31, 2018 00:00:00").getTime();
let countDownfunction = setInterval(function(){
    let now = new Date().getTime();
    let time = countDownDate-now;

    let days = Math.floor((time /(1000 * 60 * 60 * 24)));//milli to days
    let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));//mili to hour
    let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));// milli to min
    let seconds = Math.floor((time % (1000 * 60)) / (1000));// mili to sec
    /*conditionals for proper zero placement in fron of numbers <10> */
document.getElementById('countDown').textContent= days + "d  " + hours + 'h  ' + minutes + 'm  '
+ seconds + 's  ';

document.getElementById('day').textContent= days + "D  ";
document.getElementById('hour').textContent= hours + "H  ";
document.getElementById('minute').textContent= minutes + "M  ";
document.getElementById('second').textContent= seconds + "S  ";

if(time <0) {
    clearInterval(countDownfunction)
    document.getElementById('countDown').textContent = 'Happy Haloween';
}
},1000);
