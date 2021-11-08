const calcular = document.getElementById('calcular');


function treino () {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const tempo = document.getElementById('tempo').value;
    const distancia = document.getElementById('distancia').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && peso !== '' && tempo !== '' && distancia !== '') {

        const tempo_corte = tempo.split(':');

        const horas = parseInt(tempo_corte[0]);

        const minutos = parseInt(tempo_corte[1]);

        const segundos = parseInt(tempo_corte[1]);

        const tempo_horas = horas + minutos/60 + segundos/3600;

        const tempo_minutos = horas+60 + minutos + segundos/60;

        const velomed = (distancia/tempo_horas).toFixed(2);

        const pace = ((60/velomed)).toFixed(2);

        const gc = (velomed*peso*0.0175*(tempo_minutos)).toFixed(2);


        
        resultado.textContent = `Olá ${nome}, Você percorreu ${distancia} km em ${tempo} h. Isso quer dizer que a sua velocidade média foi de ${velomed} km/h,
         o que o corresponde a um pace de ${pace} h/km. Com ${peso} kg, você gastou cerca de ${gc} cal ”`;

         //resultado.textContent = '${tempo_horas}'

    }else {
        resultado.textContent = 'Para calcular, preencha os campos.';
    }

}
calcular.addEventListener('click', treino);