


document.addEventListener ('keypress', (event) => {
    var blob = new Blob(["vetores = " + vetores + " // afastamento = " + afastamento + " // deslocamento = " + deslocamento  + " // reparticao = " + reparticao + " // deformaX = " + deformaX  + " // deformaaY = " + deformaY], {type: "text/plain;charset=utf-8"});
    
    saveAs(blob, "parametros.txt");
  });

