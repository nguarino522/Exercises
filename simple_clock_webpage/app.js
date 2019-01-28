function getDate(){
    let date = Date(Date.now());
    document.getElementById("clock").innerHTML = date;
}

setInterval(getDate, 500);