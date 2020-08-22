window.onload = function () {
    var interval = null;
    var secondsAfterStart = 0;

    function showTick() {
        var hour = Math.floor(secondsAfterStart / (60 * 60));
        var minute = Math.floor((secondsAfterStart - hour * 60 * 60) / 60);
        var second = secondsAfterStart - hour * 60 * 60 - minute * 60;

        var toZeroFirst = x => ("0" + x).slice(-2);

        monitor.innerHTML = `${toZeroFirst(hour)}:${toZeroFirst(minute)}:${toZeroFirst(second)}`;

        var left = 5 * (secondsAfterStart % 2);
        timer.style.cssText = "left: " + left + "px;";
    }

    var monitor = document.getElementById('monitor');
    var timer = document.getElementById('timer');
    document.getElementById('start').onclick = () => {
        if (!interval) {
            interval = setInterval(() => {
                secondsAfterStart++;
                showTick();
            }, 1000);
        }
    };
    document.getElementById('stop').onclick = () => {
        if (interval) {
            clearInterval(interval);
            interval = null;
        }
    };
    document.getElementById('reset').onclick = () => {
        secondsAfterStart = 0;
        showTick();
    };


}
