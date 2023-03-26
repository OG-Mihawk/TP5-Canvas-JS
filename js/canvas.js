
ctx= null;
function create(){
    var canvas = document.getElementById('mon_canvas');
    ctx = canvas.getContext('2d');
    setInterval(create_cirle, 10)
    document.addEventListener('click', click)
}
liste_cirlce = [];
function click(event){
    for (var i = 0; i < liste_cirlce.length; i++) {
        var x_circle = liste_cirlce[i][0];
        var y_circle = liste_cirlce[i][1];
        console.log(event.x, event.y);
        console.log(event.y - y_circle)
        if (Math.abs(event.x - x_circle) < 50 && Math.abs(event.y - y_circle-100) <50 ) {
            ctx.clearRect(x_circle - 55, y_circle - 55, 112, 112);
            liste_cirlce.splice(i, 1);
            console.log("ok");
        }


    }
}


function create_cirle() {
    ctx.beginPath();
    x = Math.floor(Math.random() * 400);
    y = Math.floor(Math.random() * 400);
    put = true;
    for (var i = 0; i < liste_cirlce.length; i++) {
        var x_circle = liste_cirlce[i][0];
        var y_circle = liste_cirlce[i][1];

        if (Math.abs(x - x_circle) < 100 && Math.abs(y - y_circle) < 100 ) {
            put = false;
        }


    }

    if (put) {
        ctx.arc(x, y, 50, 0, 2 * Math.PI);
        liste_cirlce.push([x, y]);

    ctx.stroke();}
}

window.onload = create;