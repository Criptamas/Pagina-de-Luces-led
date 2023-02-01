const container = document.querySelector('.flex-container')
let x = 0; // variable de contador para ir iterando en la fucnion
function producto(nombre,modelo,precio){
        x++; 
        img = '<img class="clase_img" src=https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.E7BwLcILVjtYX9SDVwjjqgHaHa%26pid%3DApi&f=1&ipt=3d09053191213764318135a089f35c0fe5af0ceb4570a08b929c963b81297d0f&ipo=images>';
        nombre = `<h2>${nombre}</h2>`;
        modelo = `<h3>${modelo}</h3>`;
        precio = `<p> El precio es de: <b>$ ${precio}</b></p>`;
        return [img,nombre,modelo,precio]

}

let documentFragment = document.createDocumentFragment(); // hace al dom mas optimo




for(i = 1; i <= 20; i++){
    let precioluz = Math.floor(Math.random()*10+30);
    let marcaLuz = Math.floor(Math.random()*10+30);
    let luzLed = producto(`Luz led nro: ${i}`,`Modelo: ${marcaLuz}`,`${precioluz}`);
    let div = document.createElement('div');
    div.classList.add(`item-${i}`,'flex-item'); //recordar 😅 aca me equivoque y olvide colocar el add despues del div que es lo que permite add una class
    div.tabIndex= i; // nos marca la seleccionada
    div.addEventListener('click', ()=>{
        document.querySelector('.input-hidden').value = marcaLuz;
    }) //Importante colocarla asi y no solo con el nombre de la funcion ya que al ser funcion flecha con parametro establecido nos ayuda a fuiarnos en la funcion misma(INVESTIGAR)
    div.innerHTML = luzLed[0] + luzLed[1] + luzLed[2] + luzLed[3];
    documentFragment.appendChild(div);
}


container.appendChild(documentFragment);
