let participantes = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nome = inputAmigo.value.trim();
    const listaAmigos = document.getElementById('listaAmigos');
    const errorMessage = document.createElement('p'); // Para exibir mensagens de erro

    // Validação do nome
    if (nome.length <= 3) {
        errorMessage.textContent = 'O nome deve ter mais de 3 caracteres.';
        errorMessage.style.color = 'red';
        inputAmigo.parentNode.appendChild(errorMessage);
        return;
    }

    if (participantes.includes(nome)) {
        errorMessage.textContent = 'Este nome já foi adicionado.';
        errorMessage.style.color = 'red';
        inputAmigo.parentNode.appendChild(errorMessage);
        return;
    }

    // Limpa mensagens de erro anteriores
    const existingError = inputAmigo.parentNode.querySelector('p');
    if (existingError) {
        existingError.remove();
    }

    // Adiciona o nome à lista de participantes
    participantes.push(nome);
    inputAmigo.value = ''; // Limpa o campo de entrada

    // Atualiza a lista de participantes na tela
    const itemLista = document.createElement('li');
    itemLista.textContent = nome;
    listaAmigos.appendChild(itemLista);

    // Habilita o botão de sortear se houver pelo menos 2 participantes
    if (participantes.length >= 2) {
        document.querySelector('.button-draw').disabled = false;
    }
}

function sortearAmigo() {
    if (participantes.length < 2) {
        alert('É necessário pelo menos 2 participantes para realizar o sorteio.');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa resultados anteriores

    // Sorteia um nome aleatório
    const indiceSorteado = Math.floor(Math.random() * participantes.length);
    const nomeSorteado = participantes[indiceSorteado];

    // Exibe o resultado
    const paragrafo = document.createElement('p');
    paragrafo.textContent = `Nome sorteado: ${nomeSorteado}`;
    resultado.appendChild(paragrafo);
}

// Função para reiniciar (opcional)
function reiniciar() {
    participantes = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    document.querySelector('.button-draw').disabled = true;
}
