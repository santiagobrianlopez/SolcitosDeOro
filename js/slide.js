let ContenedorSlide = document.getElementsByClassName('ContenedorSlide')[0];

let TamañoSlide = ContenedorSlide.offsetWidth;
let Imagen = [];

if (TamañoSlide <= 800){
    Imagen[0] = 'img/1.jpg';
    Imagen[1] = 'img/2.png';
    Imagen[2] = 'img/3.png';
    Imagen[3] = 'img/4.png';
}else{
    Imagen[0] = 'img/1l.jpg';
    Imagen[1] = 'img/2l.png';
    Imagen[2] = 'img/3l.png';
    Imagen[3] = 'img/4l.png';
}


let btnesSelectoresSlide = [];

btnesSelectoresSlide[0] = document.getElementsByClassName('btnSelectorSlide0')[0];
btnesSelectoresSlide[1] = document.getElementsByClassName('btnSelectorSlide1')[0];
btnesSelectoresSlide[2] = document.getElementsByClassName('btnSelectorSlide2')[0];
btnesSelectoresSlide[3] = document.getElementsByClassName('btnSelectorSlide3')[0];


let IndiceDeImagenes = 0;

let btnIzquierdo = document.getElementsByClassName('iconNextBefore')[0];
let btnDerecho= document.getElementsByClassName('iconNextAfter')[0];
document.Slider.src = Imagen[IndiceDeImagenes];

function CambiarImagenes() {
        

         if (IndiceDeImagenes < 3){
             IndiceDeImagenes++;
             document.Slider.src = Imagen[IndiceDeImagenes];
        }
         else
        {
             IndiceDeImagenes = 0;
             document.Slider.src = Imagen[IndiceDeImagenes];
        }
}

if (IndiceDeImagenes >= 0 && IndiceDeImagenes <= 3) {

btnIzquierdo.addEventListener('click', () => {
    if (IndiceDeImagenes == 0){
                    
        IndiceDeImagenes = 3;
        document.Slider.src = Imagen[IndiceDeImagenes];
                    
    }else
    {
        IndiceDeImagenes = --IndiceDeImagenes;
        document.Slider.src = Imagen[IndiceDeImagenes];
    }
});

btnDerecho.addEventListener('click', () => {
    if (IndiceDeImagenes == 3){
                    
       IndiceDeImagenes = 0;
       document.Slider.src = Imagen[IndiceDeImagenes];
       
    }else
    {
        IndiceDeImagenes = ++IndiceDeImagenes;
        document.Slider.src = Imagen[IndiceDeImagenes];
    }
                
});

btnesSelectoresSlide[0].addEventListener('click', () => {
    IndiceDeImagenes = 0;
    document.Slider.src = Imagen[IndiceDeImagenes];
});

btnesSelectoresSlide[1].addEventListener('click', () => {
    IndiceDeImagenes = 1;
    document.Slider.src = Imagen[IndiceDeImagenes];
});

btnesSelectoresSlide[2].addEventListener('click', () => {
    IndiceDeImagenes = 2;
    document.Slider.src = Imagen[IndiceDeImagenes];
});

btnesSelectoresSlide[3].addEventListener('click', () => {
    IndiceDeImagenes = 3;
    document.Slider.src = Imagen[IndiceDeImagenes];
});

}

let Intervalo = setInterval(CambiarImagenes,4500);

function DetenerIntervalo() {
    clearInterval(Intervalo);
}

function ReactivarIntervalo() {
    Intervalo = setInterval(CambiarImagenes,4500);
}

    document.Slider.addEventListener('mouseover', () => {
        DetenerIntervalo();
    });
    document.Slider.addEventListener('mouseleave', () => {
        ReactivarIntervalo();
    });