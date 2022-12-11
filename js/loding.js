let count = document.querySelector(".loding");
function countdown() {
    count.innerHTML -=1;
    if (count.innerHTML === "0"){
        clearInterval(clear);
        count.innerHTML = "DON";
        location.href = "index.html"
    }
}
let clear = setInterval(countdown,1000)