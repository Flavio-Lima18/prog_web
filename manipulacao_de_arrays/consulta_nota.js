// Array com 10 notas fictícias
var notas = [6.5, 7.3, 5.8, 9.0, 8.2, 4.7, 7.0, 6.0, 8.5, 9.8];

// Exibe a lista de notas no HTML com posições de 1 a 10
const listaNotas = document.getElementById("listaNotas");
notas.forEach((nota, index) => {
    const li = document.createElement("li");
    li.textContent = `Nota ${index + 1}: ${nota}`;
    listaNotas.appendChild(li);
});

// Mostrar a caixa de diálogo ao clicar no link
const alertBox = document.getElementById("alertBox");
const linkConsultar = document.getElementById("linkConsultar");
const btnCancelar = document.getElementById("btnCancelar");
const btnOk = document.getElementById("btnOk");

// Abrir a caixa de diálogo ao clicar no link
linkConsultar.addEventListener('click', function() {
    alertBox.style.display = "block";
});

// Fechar a caixa de diálogo ao clicar em "Cancelar"
btnCancelar.addEventListener('click', function() {
    alertBox.style.display = "none";
});

// Função para consultar a nota e verificar se é aprovativa ou não
btnOk.addEventListener('click', function() {
    const posicao = document.getElementById("inputPosicao").value - 1; // Subtrair 1 para ajustar ao índice do array

    if (posicao >= 0 && posicao < notas.length) {
        const nota = notas[posicao];
        if (nota >= 7.0) {
            alert("A nota " + nota + " é aprovativa.");
        } else {
            alert("A nota " + nota + " não é aprovativa.");
        }
        alertBox.style.display = "none"; // Fechar caixa de diálogo após consulta
    } else {
        alert("Posição inválida! Por favor, insira um número entre 1 e 10.");
    }
});
