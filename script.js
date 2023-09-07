function updateClock() {
    let a = new Date();
    let s = a.getSeconds();
    let d = a.getDate();
    let h = a.getHours();
    let m = a.getMinutes();
    let mn = a.getMonth()+1;
    let yn = a.getFullYear();

    document.querySelector('.date').textContent = d;
    document.querySelector('.hour').textContent = h;
    document.querySelector('.minute').textContent = m;
    document.querySelector('.second').textContent = s;
    document.querySelector('.monthname').textContent = mn;
    document.querySelector('.yearname').textContent = yn;
 
}
updateClock();


setInterval(updateClock, 1000);
