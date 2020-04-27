body{
  position: fixed;
}
html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    font-size: 18px;
    background-color: white;
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    overflow: hidden;
  }
  .esquerda, .direita{
    justify-content: end;
  }
  
  .p5Canvas{
      position:fixed;
      z-index: -1;
  }

  .mesa-inf{
    position:fixed;
    color:white;
    position:fixed;
    bottom: 0;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    padding-bottom: 10px;
  }
  .mesa-sup{
    color:white;
    position: fixed;
    margin-top:10px;
    margin-bottom:0px;
    right:0;
    position: fixed;
  }
  .destaque{
    color:white;
  }
  .titulo{
    font-size:1.2em;
    font-family: 'Open Sans Condensed', sans-serif;
    align-self: end;
  }
  .botao{
    width:25px;
    padding: 10px;
    padding-top: 10px;
    background: RGBA(0,0,0,0.5);
  } 
  .reiniciar{ 
    border-top: 1px solid #888;
    padding-bottom: 10px;
    display:none;
  }
  .espaco{
    padding-bottom: 8px;
  }
  .container-inicio{
    color: #888;
    top: 0;
    letter-spacing: 1px;
    font-family: 'Share Tech Mono', monospace;
  }
  .contem-inicio{
    color:#888;
    position:absolute;
    text-align: right;
  }

  .box{
    padding: 0 5px;
    align-items: end;
    display: flex;
    justify-content: center;
  }
  .tela{
    position:absolute;
  }
  .texto{
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.9em;
  } 
  .sobre{
    font-size: 0.9em;
    font-family: 'Share Tech Mono', monospace;
    align-self: center;
    display: flex;
    height: 100%;
    justify-content: center;
  }
  .instrucao, .versao{
    display:none;
  }
  .mesa-sup{
    top: 0;
    margin-right:10;
  }
  .about-window{
    display:none;
    width:100%;
    height:100%;
    background:RGBA(0,0,0,0.8);
    position: absolute;
  }
  .texto-sobre{
    color: white;
    text-align: center;
    font-family: 'Open Sans Condensed', sans-serif;
    position: absolute;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    line-height: 115%;
    font-size: 1.25em;
    margin-left: 15px;
    margin-top: 15px;
margin-right: 20px;
  }
  .esquerda{
height: 43.45px;
display: flex;
align-items: center;
font-family: 'Share Tech Mono', monospace;
    font-size: 0.9em;
  }
  .direita{
    display: flex;
    align-items: center;
    height:45.85px;
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.9em;
  }
  .container-grid{
    display: block;
    color: white;
    margin-top: 10px;
    align-items: center;
    margin-right:10px;    
  }
  .texto-sobre > .titulo{
    font-size:1.5em;
  }
  @media (min-width: 200px) and (orientation: portrait){
    .container-inicio{
      text-align: center;
      margin-top: 30%;
    }
    .contem-inicio{
      text-align:center;
    }
  }
  @media (min-width: 200px) and (orientation: landscape){
    .container-inicio{    
      text-align: right;    
      height: 50%;    
      margin-left: -110px;    
    }        
    .contem-inicio{
      left: 0;
    }   
  }
