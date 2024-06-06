async function gerarResposta() {
    const pergunta = document.getElementById('pergunta').value;
    console.log(pergunta)

    const response = await fetch('/perguntar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ pergunta })
    });

    const data = await response.json();
    console.log(data)
    // Exibindo a resposta
    document.getElementById('resposta').innerText = data.resultado;
}