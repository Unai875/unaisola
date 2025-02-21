function konprobaketa(){
    if (document.getElementById("emaila").includes("@" && ".")){
        document.getElementById("onartu").innerHTML = (document.getElementById("emaila"), " onartzen da.");
    } else{
        document.getElementById("onartu").innerHTML = (document.getElementById("emaila"), " onartzen da.")
    }
}