
// mis opciones
const piedra = document.getElementById('rock');
const papel = document.getElementById('paper');
const tijera = document.getElementById('sisors');

//mensaje de win || lose || draw
const msgDiv = document.getElementById('msgDiv')
const msg = document.getElementById('msg')

// grid de la animacion
const resultados = document.getElementById('resultados')

// donde van las imagenes
const user = document.getElementById('user');
const pc = document.getElementById('pc')

//me guardo los SRC
const piedraImagen = piedra.firstElementChild.getAttribute('src');
const papelImagen = papel.firstElementChild.getAttribute('src');
const tijeraImagen = tijera.firstElementChild.getAttribute('src');

//opciones
const sectionOptions = document.getElementById('options')
const optionsImages = [piedraImagen, papelImagen, tijeraImagen]
const options = [piedra, papel, tijera];

function computerChoise(){
    let choise = options[Math.floor(Math.random() * options.length)];
    return choise.id
}

function animationChoises(userImage, pcImage){
    user.setAttribute('src', userImage);
    let interval = setInterval(()=>{
        pc.setAttribute('src', optionsImages[ Math.floor(Math.random() * optionsImages.length) ])
    },60)
    setTimeout(()=>{
        clearInterval(interval);
        pc.setAttribute('src', pcImage )
    },1600)
}

function win(){
    setTimeout(()=>{
        sectionOptions.style.display = "none"
        resultados.style.display = "none"
        msgDiv.style.display = "flex"
        msg.innerHTML = "Has Ganado"
        setTimeout(()=>{
            resultados.style.display = "grid"
            sectionOptions.style.display = "grid"
            msgDiv.style.display = "none"
        },1600)
    },2600)
}
function lose(){
    setTimeout(()=>{
        sectionOptions.style.display = "none"
        resultados.style.display = "none"
        msgDiv.style.display = "flex"
        msg.innerHTML = "Has Perdido"
        setTimeout(()=>{
            sectionOptions.style.display = "grid"
            resultados.style.display = "grid"
            msgDiv.style.display = "none"
        },1600)
    },2600)
}
function draw(){
    setTimeout(()=>{
        sectionOptions.style.display = "none"
        resultados.style.display = "none"
        msgDiv.style.display = "flex"
        msg.innerHTML = "Has Empatado"
        setTimeout(()=>{
            sectionOptions.style.display = "grid"
            resultados.style.display = "grid"
            msgDiv.style.display = "none"
        },1600)
    },2600)
}

for(let i in options){
    options[i].addEventListener('click', async ()=>{
        let computerOption = computerChoise();
        let userOption = options[i].id
        switch(userOption + computerOption){
            case "rocksisors": animationChoises(piedraImagen, tijeraImagen); win(); break;
            case "rockpaper": animationChoises(piedraImagen, papelImagen); lose(); break;
            case "rockrock": animationChoises(piedraImagen, piedraImagen); draw(); break;
            
            case "sisorspaper": animationChoises(tijeraImagen, papelImagen); win(); break;
            case "sisorsrock": animationChoises(tijeraImagen, piedraImagen); lose(); break;
            case "sisorssisors": animationChoises(tijeraImagen, tijeraImagen); draw(); break;

            case "paperrock": animationChoises(papelImagen, piedraImagen); win(); break;
            case "papersisors": animationChoises(papelImagen, tijeraImagen); lose(); break;
            case "paperpaper": animationChoises(papelImagen, papelImagen); draw(); break;
        }
    })
}

