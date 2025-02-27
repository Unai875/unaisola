function irudi_aleatorioa(){
    
}

function modua(){
    if(document.getElementsByClassName("m_botoia")[0].textContent.includes("Modua")){
        document.getElementsByClassName("m_botoia")[0].textContent = "Iluna";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.getElementsByClassName("irudia1")[0].style.backgroundColor = "#444";
        document.getElementsByClassName("irudia2")[0].style.backgroundColor = "#444";
    } else if ((document.getElementsByClassName("m_botoia")[0].textContent.includes("Argia"))){
        document.getElementsByClassName("m_botoia")[0].textContent = "Iluna";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.getElementsByClassName("irudia1")[0].style.backgroundColor = "#444";
        document.getElementsByClassName("irudia2")[0].style.backgroundColor = "#444";
    } else {
        document.getElementsByClassName("m_botoia")[0].textContent = "Argia";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.getElementsByClassName("irudia1")[0].style.backgroundColor = "white";
        document.getElementsByClassName("irudia2")[0].style.backgroundColor = "white";
    }
}