const pessoas = [
    { name: "Fabiana Araujo", age: 23 },
    { name: "Gabriel Gomes", age: 25 },
    { name: "Fernando Henrique", age: 17 },
    { name: "Ana Luiza", age: 2 },
    { name: "Geralda do Nascimento", age: 93 },
    { name: "Miguel Souza", age: 70 },
    { name: "Antonio Miguel", age: 69 },
];

function dados(nome) {
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].name == nome) {
            return pessoas[i];
        } else
            return console.log("Pessoa não encontrada");
    }
}

function vetorNomes() {
    const nomes = [];
    for (let i = 0; i < pessoas.length; i++) {
        nomes[i] = pessoas[i].name;
    }
    return nomes;
}

function habilitacao() {
    const vet = [];
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].age > 17) {
            vet[i] = pessoas[i];
        }
    }
    return vet;

}

function mediaIdade() {
    let soma = 0;
    let media = 0;
    let cont = 0;
    for (let i = 0; i < pessoas.length; i++) {
        soma = soma + pessoas[i].age;
        cont++;
    }
    media = soma / cont;
    return media;
}



console.log(dados("Fabiana Araujo"));
console.log(vetorNomes());
console.log(habilitacao());
console.log(mediaIdade());

