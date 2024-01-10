class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";
        switch (this.tipo.toLowerCase()) {
            case "assassina":
                ataque = "usou armadilha envenenada.";
                break;
            case "amazona":
                ataque = "usou a lança.";
                break;
            case "feiticeira":
                ataque = "usou magia.";
                break;
            case "paladino":
                ataque = "usou espada sagrada.";
                break;
            case "druida":
                ataque = "usou vento devastador.";
                break;
            case "barbaro":
                ataque = "usou golpe feroz.";
                break;
            case "necromante":
                ataque = "invocou os mortos.";
                break;
            default:
                ataque = "usou um método desconhecido de ataque.";
        }

        const resultadoElement = document.getElementById('resultado');
        resultadoElement.innerHTML = `
          <p>${this.nome}, ${this.idade} anos, ${this.tipo}, ${ataque}</p>
          <img src="imagens/${this.tipo.toLowerCase()}.png" alt="${this.tipo}">
        `;
    }
}

function criarHeroi() {
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    const tipo = document.getElementById('tipo').value;

    const heroi = new Heroi(nome, idade, tipo);
    heroi.atacar();
}

