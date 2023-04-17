let senha = '';

function gerarSenha() {
    const letras = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    const numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    const letrasMaiusculas = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
        'O', 'p', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    const caracterEspecial = ['!', '#', '$', '%', '&', '@'];


    let quantSenha = document.getElementById("caracter").value
    let conta

    if (quantSenha >= 0) {
        
        for (let i = 0; i < quantSenha; i++) { 
            conta = Math.floor(Math.random() * 4 + 1)
            if (conta == 1) {
                conta = Math.floor(Math.random(-1) * 26)
                senha = senha + letras[conta]
            } else if (conta == 2) {
                conta = Math.floor(Math.random(-1) * 10)
                senha = senha + numeros[conta]
            } else if (conta == 3) {
                conta = Math.floor(Math.random(-1) * 26)
                senha = senha + letrasMaiusculas[conta]
            } else if (conta == 4) {
                conta = Math.floor(Math.random(-1) * 6)
                senha = senha + caracterEspecial[conta]
            }
        }
        document.getElementById("campoSenha").style.display = 'block';
        document.getElementById("campoSenha").value = senha


    } else alert('Numero invalido')

    senha = ''

}


function html() {
    document.body.innerHTML = `
        <div class="caixa">
            <h1>Gerador de senha</h1>
            <list>
                <div class="caixa-caracter">
                    <p>Caracters: </p>
                    <input type="text" id="caracter"></input>
                </div>
                <input type="text" id="campoSenha" style="display:flex;">
                <input type="button" value="Enviar" onClick="gerarSenha()">
            </list>
        </div>
    `
}
html()

