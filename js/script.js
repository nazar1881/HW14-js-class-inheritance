let time1 = document.getElementById('clock1');
let time2 = document.getElementById('clock2');

let Clock = function(el) {
    this.el = el;
    
    this.el.addEventListener('click', () => {
        this.toggleFormat();
    });
}

Clock.prototype.toggleFormat = function() {
    this.formatWithSeconds = !this.formatWithSeconds;
}

Clock.prototype.getTime = function() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return [hours, minutes, seconds];
}

Clock.prototype.render = function() {
    let time = this.getTime();
    let hours = time[0];
    let minutes = time[1];
    let seconds = time[2];

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    this.el.innerText = this.formatWithSeconds ? `${hours}:${minutes}:${seconds}` : `${hours}:${minutes}`;
}

function FullFormat (el, format) {
    Clock.call(this, el)
    this.formatWithSeconds = format;
}

function ShortFormat (el, format) {
    Clock.call(this, el)
    this.formatWithSeconds = format;
}

FullFormat.prototype = Clock.prototype;
ShortFormat.prototype = Clock.prototype;

console.log(this.el);

let fullFormatClock = new FullFormat(time1, true);

setInterval(() => {
    fullFormatClock.render()
}, 250);

let shortFormatClock = new ShortFormat(time2, false);

setInterval(() => {
    shortFormatClock.render()
}, 250);