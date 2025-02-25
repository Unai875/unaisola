function konprobaketa(event){
    event.preventDefault();

    const emaila = document.getElementById("emaila").value;
    const emaitza = document.getElementById("onartu");

    if (emaila.includes("@")){
        emaitza.textContent = "Emaila egokia da.";
        emaitza.style.color = "green";
    } else {
        emaitza.textContent = "Errorea";
        emaitza.style.color = "red";
    }
}

document.getElementById("konprobaketa").addEventListener("click", konprobaketa);