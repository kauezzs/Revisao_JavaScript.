// ==========================================
// EXERCÍCIO 1 - CALCULADORA DE MÉDIA
// ==========================================

function calcularMedia(nota1, nota2, nota3) {

    let media = (nota1 + nota2 + nota3) / 3;

    return media;
}

let media = calcularMedia(7, 8, 6);

console.log("Exercício 1");
console.log("Média:", media);

if (media >= 7) {

    console.log("Aprovado");

} else {

    console.log("Reprovado");
}



// ==========================================
// EXERCÍCIO 2 - VERIFICADOR DE TIPO
// ==========================================

function verificarTipo(variavel) {

    console.log("A variável é do tipo " + typeof variavel);
}

console.log("Exercício 2");

verificarTipo("Olá");
verificarTipo(10);
verificarTipo(true);



// ==========================================
// EXERCÍCIO 3 - OPERADOR TERNÁRIO
// ==========================================

console.log("Exercício 3");

let idade = 18;

let status = idade >= 18
    ? "Maior de idade"
    : "Menor de idade";

console.log(status);



// ==========================================
// EXERCÍCIO 4 - TABUADA
// ==========================================

console.log("Exercício 4");

let numero = 7;

for (let i = 1; i <= 10; i++) {

    console.log(
        numero + " x " + i + " = " + (numero * i)
    );
}



// ==========================================
// EXERCÍCIO 5 - DIA DA SEMANA
// ==========================================

console.log("Exercício 5");

let diaSemana = 3;

switch (diaSemana) {

    case 1:
        console.log("Domingo");
        break;

    case 2:
        console.log("Segunda");
        break;

    case 3:
        console.log("Terça");
        break;

    case 4:
        console.log("Quarta");
        break;

    case 5:
        console.log("Quinta");
        break;

    case 6:
        console.log("Sexta");
        break;

    case 7:
        console.log("Sábado");
        break;

    default:
        console.log("Número inválido");
}



// ==========================================
// EXERCÍCIO 6 - ARROW FUNCTION
// ==========================================

console.log("Exercício 6");

const calcularArea = (base, altura) => {

    return base * altura;
};

let area = calcularArea(5, 4);

console.log("Área do retângulo:", area);



// ==========================================
// EXERCÍCIO 7 - LISTA DE COMPRAS
// ==========================================

console.log("Exercício 7");

let listaDeCompras = [
    "Arroz",
    "Feijão",
    "Batata"
];

listaDeCompras.push("Macarrão");

listaDeCompras.unshift("Suco");

listaDeCompras.pop();

console.log("Lista final:", listaDeCompras);



// ==========================================
// EXERCÍCIO 8 - ALUNOS
// ==========================================

console.log("Exercício 8");

const alunos = [

    {
        nome: "Ana",
        nota: 8.5,
        idade: 20
    },

    {
        nome: "João",
        nota: 6.7,
        idade: 22
    },

    {
        nome: "Maria",
        nota: 9.3,
        idade: 19
    },

    {
        nome: "Carlos",
        nota: 5.0,
        idade: 21
    },

    {
        nome: "Beatriz",
        nota: 7.8,
        idade: 20
    }
];


// 1 - Filtrar aprovados

let aprovados = alunos.filter(function(aluno) {

    return aluno.nota >= 7;

});

console.log("Alunos aprovados:", aprovados);


// 2 - Pegar apenas os nomes

let nomesAlunos = alunos.map(function(aluno) {

    return aluno.nome;

});

console.log("Nomes dos alunos:", nomesAlunos);


// 3 - Média das idades

let somaIdades = alunos.reduce(function(soma, aluno) {

    return soma + aluno.idade;

}, 0);

let mediaIdade = somaIdades / alunos.length;

console.log("Média de idade:", mediaIdade);


// 4 - Encontrar aluno com nota menor que 6

let alunoEncontrado = alunos.find(function(aluno) {

    return aluno.nota < 6;

});

console.log("Aluno com nota menor que 6:", alunoEncontrado);



// ==========================================
// EXERCÍCIO 9 - MUDAR TEXTO
// ==========================================

let titulo = document.getElementById("titulo");

let btnMudar = document.getElementById("btnMudar");

btnMudar.addEventListener("click", function() {

    titulo.innerText = "Título Alterado com Sucesso!";

});



// ==========================================
// EXERCÍCIO 10 - CONTADOR
// ==========================================

let contagem = 0;

let contador = document.getElementById("contador");

let btnIncrementar =
    document.getElementById("btnIncrementar");

btnIncrementar.addEventListener("click", function() {

    contagem++;

    contador.innerText = contagem;

});



// ==========================================
// EXERCÍCIO 11 - DESTACAR PARÁGRAFOS
// ==========================================

let paragrafos =
    document.querySelectorAll(".paragrafo");

let btnDestacar =
    document.getElementById("btnDestacar");

btnDestacar.addEventListener("click", function() {

    paragrafos.forEach(function(paragrafo) {

        paragrafo.classList.add("destaque");

    });

});



// ==========================================
// EXERCÍCIO 12 - ESPELHO DE DIGITAÇÃO
// ==========================================

let campoInput =
    document.getElementById("campoInput");

let textoRefletido =
    document.getElementById("textoRefletido");

campoInput.addEventListener("input", function() {

    textoRefletido.innerText = campoInput.value;

});



// ==========================================
// DESAFIO FINAL - CALCULADORA
// ==========================================


// Pegando os inputs

let num1 = document.getElementById("num1");

let num2 = document.getElementById("num2");


// Pegando os botões

let btnSoma = document.getElementById("btnSoma");

let btnSub = document.getElementById("btnSub");

let btnMulti = document.getElementById("btnMulti");

let btnDiv = document.getElementById("btnDiv");


// Pegando o resultado

let resultado = document.getElementById("resultado");



// Função de soma

function somar(a, b) {

    return a + b;
}



// Função de subtração

function subtrair(a, b) {

    return a - b;
}



// Função de multiplicação

function multiplicar(a, b) {

    return a * b;
}



// Função de divisão

function dividir(a, b) {

    return a / b;
}



// Função para pegar os números

function calcular() {

    let valor1 = Number(num1.value);

    let valor2 = Number(num2.value);

    return [valor1, valor2];
}



// BOTÃO DE SOMA

btnSoma.addEventListener("click", function() {

    let valores = calcular();

    let valor1 = valores[0];

    let valor2 = valores[1];

    let resultadoFinal =
        somar(valor1, valor2);

    resultado.innerText = resultadoFinal;

});



// BOTÃO DE SUBTRAÇÃO

btnSub.addEventListener("click", function() {

    let valores = calcular();

    let valor1 = valores[0];

    let valor2 = valores[1];

    let resultadoFinal =
        subtrair(valor1, valor2);

    resultado.innerText = resultadoFinal;

});



// BOTÃO DE MULTIPLICAÇÃO

btnMulti.addEventListener("click", function() {

    let valores = calcular();

    let valor1 = valores[0];

    let valor2 = valores[1];

    let resultadoFinal =
        multiplicar(valor1, valor2);

    resultado.innerText = resultadoFinal;

});



// BOTÃO DE DIVISÃO

btnDiv.addEventListener("click", function() {

    let valores = calcular();

    let valor1 = valores[0];

    let valor2 = valores[1];


    if (valor2 == 0) {

        resultado.innerText =
            "Não se divide por 0";

    } else {

        let resultadoFinal =
            dividir(valor1, valor2);

        resultado.innerText = resultadoFinal;
    }

});