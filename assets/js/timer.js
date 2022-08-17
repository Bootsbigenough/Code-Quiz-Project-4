var time=60
    setInterval(myTimer, 1000);

    var myTimer= setInterval(function() {
        
    var timeleft =   time -- 
    document.getElementById("demo").innerHTML = time;
    if (timeleft == 1){
        clearTimeout (myTimer)
    }
    },1000)
