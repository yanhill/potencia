let slider1,slider2,slider3,slider4,slider5,slider6,slider7;

let SliderA,sliderB,sliderC,sliderD,sliderE;

let sliderVelocidade;

var hueA,hueB,hueC,hueD,hueE;

function criaSliders(){
    slider1 = createSlider(-2000, 2000);
    slider2 = createSlider(-200, 200);
    slider3 = createSlider(-100, 100);
    slider4 = createSlider(0, 5000);
    slider5 = createSlider(0, 5000);

    sliderVelocidade = createSlider(0, 100);
  //  slider6 = createSlider(-50, 50);
  //  slider7 = createSlider(-50, 50);
    slider1.position(10, 5);
    slider2.position(10, 20);
    slider3.position(10, 35);
    slider4.position(10, 50);
    slider5.position(10, 65);

  //  slider6.position(10, 90);
  //  slider7.position(10, 105);

    slider1.style('width', '95%');
    slider2.style('width', '95%');
    slider3.style('width', '95%');
    slider4.style('width', '95%');
    slider5.style('width', '95%');
 //   slider6.style('width', '95%');
 //   slider7.style('width', '95%');

    // CORES
    
    sliderA = createSlider(0, 360);
    sliderB = createSlider(0, 360);
    sliderC = createSlider(0, 360);
    sliderD = createSlider(0, 360);
    sliderE = createSlider(0, 360);
    

    sliderA.position(10, 125);
    sliderB.position(10, 135);
    sliderC.position(10, 145);
    sliderD.position(10, 155);
    sliderE.position(10, 165);
    sliderVelocidade.position(10,185);
}

function assignSliders(){
    afastamento = slider1.value();
    deslocamento = slider2.value();
    reparticao = slider3.value();

    deformaX = slider4.value();
    deformaY = slider5.value();

    hueA = sliderA.value();
    hueB = sliderB.value();
    hueC = sliderC.value();
    hueD = sliderD.value();
    hueE = sliderE.value();

    maxVelocity = sliderVelocidade.value();
}