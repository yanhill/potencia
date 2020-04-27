var aboutWindow, aboutText;
var aboutOnScreen, contactOnScreen;
var title;
var aboutButtons;
var tela;
var mesaInf, mesaSup; 
var containerInicio;
var btnUpdate, btnRestart, about, contact;
var canvasScript;

document.addEventListener('DOMContentLoaded', function() {
    btnRestart = document.getElementById("restart");
    btnUpdate = document.getElementById("update");
    about = document.getElementById("about");
    aboutWindow = document.getElementById("aboutWindow");
    mesaSup = document.getElementById("mesaSup");
    containerInicio = document.getElementById("inicio");
    title = document.getElementById("title");
    aboutText = document.getElementById("aboutText");
    aboutButtons = document.getElementById("aboutButtons");
    contact = document.getElementById("contact");
    mesaInf = document.getElementById("mesaInf");
    
    btnRestart.addEventListener('click', restart, false);
    btnUpdate.addEventListener('click', update, false);
    contact.addEventListener('click', showContact, false);
    about.addEventListener('click', showAbout, false);
    aboutWindow.addEventListener('click',hideAbout , false);
 }, false); 


 function update(){
    vetores = random(150,50);
    deformaX = random(0,5026)
    deformaY = random(0,5019);
    afastamento = random(2,500);
    raioX = 0;
    raioY = 0; 
    primeiro = true;
 };

 function restart(){
    comecou = false;
    primeiro = true;  

    console.log("restart");
    song.stop();
    predefinicoesDoObjeto();

    if(aboutOnScreen){
        hideAbout();
    }       
    containerInicio.style.display="block";
    btnRestart.style.display="none";
 }

 function pauseGame(){
    aboutWindow.style.display ="block";
    about.style.zIndex="1";
    about.innerHTML="Toque para voltar";   
    containerInicio.style.display="none";
    mesaInf.style.background="none";
    contact.innerHTML="";
    title.style.display="none";
 }

 function gameBack(){
    mesaSup.style.display="block";
    about.style.display="flex";
    about.innerHTML="sobre";  
    contact.innerHTML="contato";
    aboutWindow.style.display ="none"; 
    title.style.display="block";
    mesaInf.style.background="RGBA(0,0,0,0.5)";
    aboutText.innerHTML ="";
    aboutText.style.display ="block";

    if(!comecou){
        btnRestart.style.display="none";
        containerInicio.style.display="block";
        realignBegining();     
    }
}

 function showContact(){
    contactOnScreen = true;
    pauseGame();
    aboutButtons.style.display = "none";
    mesaSup.style.zIndex="0";
    aboutText.innerHTML ="Ambiente sensível ao som e ao toque, produzido com javascript e P5.js por Yan Hill.<br><br>Coisa é um objeto <i>virtual</i>. Isso significa que não se trata de um objeto com parâmetros constantes e irrevogáveis. Ao contrário, se trata, na verdade, de algo que pode ser atualizado incontéveis vezes. E cada vez em que é atualizado, seus parâmetros mudam, formando um outro código, ou uma outra interpretação da mesma coisa.<br>É exatamente o que acontece ao clicar no botão atualizar. Os números que determinam os parâmetros da coisa são sorteados entre 0 e 49.999, então a coisa surge novamente em uma nova manifestação de si. Enfim, virtualizar é, antes de tudo, regredir. É transformar aquilo que já está solucionado em um problema. E então conceder <b>potência</b> a esse problema. Potência para infinitas soluções. " ;
    aboutText.style.textAlign = "left";
    mesaSup.style.display = "none";
    aboutText.style.top = "0";
 }

 function showAbout(){   
    aboutOnScreen = true;
    pauseGame();
    aboutButtons.style.display = "block";
    mesaSup.style.zIndex="1";
    btnRestart.style.display="block";    
    aboutText.style.top = centroY-(aboutText.clientHeight/2)+"px";
    aboutButtons.style.width = windowWidth - btnUpdate.offsetWidth - 20;
}

 function hideContact(){
    gameBack();
    aboutButtons.style.display = "block"; 
    contactOnScreen = false;
}

function hideAbout(){
    gameBack();  
    aboutOnScreen = false;
}

function realignBegining(){   
    if(windowWidth/windowHeight > 1){ // HORIZONTAL
        containerInicio.style.top = centroY-(containerInicio.clientHeight/2)+"px";
        containerInicio.style.left = centroX-(containerInicio.clientWidth/2)-(deslocamento+150)+"px"}
    else{ // VERTICAL
        containerInicio.style.top = centroY-(containerInicio.clientHeight/2)-(deslocamento+100)+"px";
        containerInicio.style.left = (centroX-(containerInicio.clientWidth*0.5))+"px";}
    }

function realignCenter(){
    centroX = windowWidth/2;
    if(windowWidth/windowHeight < 0.6){
        centroY = windowHeight/2.5;}
    else centroY = windowHeight/2.25;

    if(aboutOnScreen || contactOnScreen){
        aboutText.style.top = centroY-(aboutText.clientHeight/2)+"px";
        aboutButtons.style.width = windowWidth - btnUpdate.offsetWidth - 20;
    }
}

window.addEventListener('orientationchange', function(){
    resizeCanvas(windowWidth, windowHeight);
    console.log("orientacao_mudou");
    realignCenter();
    if(!comecou){
        realignBegining();
    }
});
