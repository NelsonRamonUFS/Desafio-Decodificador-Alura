// Função para criptografar o texto
function encryptText(text) {
    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encryptedText;
}

// Função para descriptografar o texto
function decryptText(text) {
    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return decryptedText;
}

// Função para copiar texto para a área de transferência
function copyToClipboard() {
    let outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
    alert("Texto copiado para a área de transferência!");
}

// Event listeners para os botões
document.getElementById('encrypt-btn').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value.toLowerCase();
    document.getElementById('output-text').value = encryptText(inputText);
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value.toLowerCase();
    document.getElementById('output-text').value = decryptText(inputText);
});

// Event listener para o botão de copiar
document.getElementById('copy-btn').addEventListener('click', copyToClipboard);
