/*

IMC = peso / altura ** 2 (Peso (Kg) dividido pela altura (m) ao quadrado)

*/

const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('.peso')
    const inputAltura = e.target.querySelector('.altura')

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso Inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura Inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`;

    setResultado(msg, true);

    console.log('Chegeui Aqui!');
});

function getImc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc.toFixed(2);
}

function getNivelImc(imc) {
    const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];

    if (imc >= 34.9) {
        const item6 = document.querySelector('#item6')
        item6.className.add('nivelImc');
        return nivel[5];
    }

    if (imc >= 29.9) {
        const item5 = document.querySelector('#item5')
        item5.className.add('nivelImc');
        return nivel[4];
    }

    if (imc >= 29.9) {
        const item4 = document.querySelector('#item4')
        item4.className.add('nivelImc');
        return nivel[3];
    }

    if (imc >= 24.9) {
        const item3 = document.querySelector('#item3')
        item3.className.add('nivelImc');
        return nivel[2];
    }

    if (imc >= 18.5) {
        const item2 = document.querySelector('#item2')
        item2.className.add('nivelImc');
        return nivel[1];
    }

    if (imc < 18.5) {
        const item1 = document.querySelector('#item1')
        item1.className.add('nivelImc');
        return nivel[0];
    }
}

function criaP() {
    const p = document.createElement('p');
    return p;
}


function setResultado(msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';

    const p = criaP();
    
    if (isValid) {
        console.log('Cheguei Aqui!');
        //p.class.add('paragrafo-resultado');
        resultado.p = 'Olá'

    } else {
        p.class.add('bad');
    }
    
    p.innerHTML = msg;
    resultado.appendChild(p);
}