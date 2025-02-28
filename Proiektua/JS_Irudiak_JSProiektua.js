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

function zenbakia(n){
    return(Math.floor(Math.random() * n + 1 ));
}

var aldatu_irudia = new Array();
aldatu_irudia[0] = "irudiak/html_logo.png";
aldatu_irudia[1] = "irudiak/css_logo.png";
aldatu_irudia[2] = "irudiak/js_logo.png";
aldatu_irudia[3] = "irudiak/blog.png";
aldatu_irudia[4] = "irudiak/MEGAICE.png";

function loop() {
    document.getElementById("aleatorioa").src = aldatu_irudia[zenbakia(5)-1];
    setTimeout(loop, 100);
}

function aukeratu_irudia(){
    document.getElementById("aukeratuta").src = aldatu_irudia[zenbakia(5)-1];
}