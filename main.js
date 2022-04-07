function dong_ho() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var gio = document.getElementById('gio');
    var phut = document.getElementById('phut');
    var giay = document.getElementById('giay');

    gio.innerHTML = hour;
    phut.innerHTML = minute;
    giay.style.transition = '1s linear';
    giay.innerHTML = second;
}

var dem_gio = setInterval(dong_ho, 1000);