function konprobaketa(){
    if (document.getElementById("emaila").value.includes("@")){
        document.getElementById("onartu").textContent = (document.getElementById("emaila").value, " ez da onartzen.");
    } else {
        document.getElementById("onartu").textContent = (document.getElementById("emaila").value, " ez da onartzen.")
    }
}