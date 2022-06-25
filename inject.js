window.onload = function() {
    f1();
}


function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 500);
    });
}

async function f1() {
    var x = await resolveAfter2Seconds(10);
    flip_screen();
}

function flip_screen() {
    document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";
    let media = document.querySelectorAll("img, picture, video");
    media[0].style.filter = "invert(1) hue-rotate(180deg)";
}
