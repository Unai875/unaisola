function konprobaketa(event){
    event.preventDefault();

    const emaila = document.getElementById("emaila").value;
    const emaitza = document.getElementById("onartu");

    if (emaila.includes("@")){
        emaitza.textContent = "Emaila egokia da.";
        emaitza.style.color = "green";
    } else {
        emaitza.textContent = "Emaila ez da egokia.";
        emaitza.style.color = "red";
    }
}

document.getElementById("konprobaketa").addEventListener("click", konprobaketa);

function modua(){
    if(document.getElementsByClassName("m_botoia")[0].textContent.includes("Modua")){
        document.getElementsByClassName("m_botoia")[0].textContent = "Iluna";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.getElementsByClassName("formulario-kontainerra")[0].style.backgroundColor = "#444";
        document.getElementsByClassName("formulario-kontainerra")[0].style.borderBottomLeftRadius = "5px";
        document.getElementsByClassName("formulario-kontainerra")[0].style.borderBottomRightRadius = "5px";
    } else if ((document.getElementsByClassName("m_botoia")[0].textContent.includes("Argia"))){
        document.getElementsByClassName("m_botoia")[0].textContent = "Iluna";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.getElementsByClassName("formulario-kontainerra")[0].style.backgroundColor = "#444";
        document.getElementsByClassName("formulario-kontainerra")[0].style.borderBottomLeftRadius = "5px";
        document.getElementsByClassName("formulario-kontainerra")[0].style.borderBottomRightRadius = "5px";
    } else {
        document.getElementsByClassName("m_botoia")[0].textContent = "Argia";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.getElementsByClassName("formulario-kontainerra")[0].style.backgroundColor = "white";
        document.getElementsByClassName("formulario-kontainerra")[0].style.borderBottomLeftRadius = "5px";
        document.getElementsByClassName("formulario-kontainerra")[0].style.borderBottomRightRadius = "5px";
    }
}