const calcular = document.getElementById('calcular');


function treino () {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const tempo = document.getElementById('tempo').value;
    const distancia = document.getElementById('distancia');

    if (nome !== '' && peso !== '' && tempo !== '' && distancia !== '') {

        const velomed = (distancia/tempo).toFixed(1);
        const pace = (tempo/distancia).toFixed(1);
        const gc = (velocidade*peso*0,0175*tempo).toFixed(1);
        
        resultado.textContent = `Olá ${nome}, Você percorreu ${distancia} km em ${tempo} h. Isso quer dizer que a sua velocidade média foi de ${velomed} km/h,
         o que o corresponde a um pace de ${pace} h/km. Com ${peso} kg, você gastou cerca de ${gc} cal ”`;

    }else {
        resultado.textContent = 'Para calcular, preencha os campos.';
    }

}
calcular.addEventListener('click', treino);