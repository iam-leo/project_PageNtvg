//Alerta principal sobre Spotify
Swal.fire({
    icon: 'info',
    title: 'Bienvenido/a',
    html: '<p> Para una mejor experiencia <br>' +
          'inicia sesión en' + '<a href="https://open.spotify.com/" target="_blank"> Spotify </a>' + 'previamente! </p>',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  });

//MENU MOVIL
    //MOSTRAR / OCULTAR menu desde el boton
const btnMenu = document.querySelector('.burger');
const cuerpoMenu = document.querySelector('.menu-movil');
const listaEnlaces = document.querySelector('ul');
btnMenu.addEventListener('click', mostrarMenu);

function mostrarMenu(){
    cuerpoMenu.classList.toggle('show');
}

    //OCULTAR menu clickeando en cualquier parte de la pantalla
document.addEventListener('click', function(e){
    let click = e.target;

    if(click !== cuerpoMenu && click !== btnMenu && click !== listaEnlaces){
        ocultarMenuSinBoton();
    }
});

function ocultarMenuSinBoton(){
    cuerpoMenu.classList.remove('show');
}

//CAMBIO DE IMAGENES DEL BACKGROUND y AÑADIR LISTA AL REPRODUCTOR SPOTIFY
let nombreDisco = document.querySelectorAll('.columna span');
let reproductor = document.getElementById('reproductor');

for(let i=0; i<nombreDisco.length; i++){
        
    nombreDisco[i].addEventListener('click', ()=>{
        removerClaseActivo();
        nombreDisco[i].classList.add('activo');

        document.querySelector('.imagen .frente').style.transform = 'scale(.4)';
        document.querySelector('.imagen .atras').style.transform = 'scale(.4)';
        let imgSrc = nombreDisco[i].getAttribute('data-src');
        reproductor.innerHTML = discos[i].lista;
        
        setTimeout(()=>{
            document.querySelector('.imagen .frente').style.transform = 'scale(1)';
            document.querySelector('.imagen .atras').style.transform = 'scale(1)';

            document.querySelector('.imagen .frente').setAttribute('src', imgSrc);
            document.querySelector('.imagen .atras').setAttribute('src', imgSrc);
        }, 700);
    });
}

function removerClaseActivo(){
    for(let j = 0; j<nombreDisco.length; j++){
        nombreDisco[j].classList.remove('activo');
    }
}

const discos = [
    //El orden de los objetos es en base a como aparecen en el html
    luz = {
        lista: '<div class="proximamente"><h2> Próximamente </h2></div>'
       },
    
    otrasCancionesEnVivo = {
        lista: '<iframe src="https://open.spotify.com/embed/album/4UGpnKpfb814RkAWPUtSVP" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       },
    
    otrasCanciones = {
        lista: '<iframe src="https://open.spotify.com/embed/album/72SqrtijWJKq6ukitktd1D" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       },
    
    suenanLasAlarmas = {
        lista: '<iframe src="https://open.spotify.com/embed/album/5j5VrewC19P5osNjNanIu6" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       },
    
    elTiempoOtraVezAavanza = {
        lista: '<iframe src="https://open.spotify.com/embed/album/314m9ZiGXnoaDtXp96LlHs" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       },

    enVivoCostaneraSur = {
        lista: '<iframe src="https://open.spotify.com/embed/album/67WlOjAlClWfVuIWK6oQ4r" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       },

    elVeranoSiguiente = {
        lista: '<iframe width="400" height="280" src="https://www.youtube.com/embed/NrT7K1tKZRU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
       },
    
    elCalorDelPlenoInvierno = {
        lista: '<iframe src="https://open.spotify.com/embed/album/1rfWo44UYWqM3a99Vknlc3" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       },
    
    publico = {
        lista: '<iframe src="https://open.spotify.com/embed/album/2bsgIaaXUmgo5lhHhaobJb" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       },

    porLoMenosHoy = {
        lista: '<iframe src="https://open.spotify.com/embed/album/1TOwIV6ewSvQ7qn0Gsxtdp" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       },

    soloDeNocheSoloDeDia = {
        lista: '<iframe src="https://open.spotify.com/embed/album/4WoGOnzso5RmTV49XBtP3i" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       },
    
    elCaminoMasLargo = {
        lista: '<iframe src="https://open.spotify.com/embed/album/1uepX7Q6C8lSh2kR96DmtX" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       },
    
    tan = {
        lista: '<iframe src="https://open.spotify.com/embed/album/1H5MsrfzzoiznKp4jj8WWz" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       },
    
    todoEsTanInflamable = {
        lista: '<iframe src="https://open.spotify.com/embed/album/0imPBxeWsUs8kRtWH724Ox" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       },

    mvd = {
        lista: '<iframe src="https://open.spotify.com/embed/album/3fV0us97rc1lbhjWVWQO2U" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       },
    
    aunqueCuesteVerElSol = {
        lista: '<iframe src="https://open.spotify.com/embed/album/0hIeX3j63GPq4UvoGcA67J" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       },

    esteFuerteVientoQueSopla = {
     lista: '<iframe src="https://open.spotify.com/embed/album/6HyHimLPwJgAVkpH7fc8gb" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    soloDeNoche = {
        lista: '<iframe src="https://open.spotify.com/embed/album/3Z1cTp20KJooqXq5zRLmWt" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
       }

]