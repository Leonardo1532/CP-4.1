let array1: number[] = []
let array2: number[] = []

function Tabuada(numero: number) {
    for (let index = 1; index <= 10; index++) {
        let resultado = index * numero
        array1.push(resultado)
    }
    console.log(array1)

    let numero2 = numero + 1
    let numero3 = numero + 2
    for (let index = 1; index <= 10; index++) {
        let resultado1 = index * numero2
        let resultado2 = index * numero3
        array2.push(resultado1)
        array2.push(resultado2)
    }
    console.log(array2)
}

function PontosDeOnibus(array: number[][]) {
    let passageiros = 0
    for (let index = 0; index < array.length; index++) {

        if (array[0][1] != 0) {
            alert("Na primeira parada não sai nenhum passageiro!")
        }
        if (array[index][0]) {
            let arrayZero = array[index][0]
            passageiros = passageiros + arrayZero
        }
        if (array[index][1]) {
            let arrayUm = array[index][1]
            passageiros = passageiros - arrayUm
        }
    }
    if (passageiros >= 0) {
        return passageiros
    } else {
        alert("Não pode ter um número de passageiros negativo!")
    }
}

function Bingo(array: number[] = []) {
    let contador = 0
    let arrayNovo = []
    for (let index = 0; index < array.length; index++) {

        if (array[index] < 1 || array[index] > 26) {
            alert("Número fora do permitido")
        } else {
            if (array[index] == 2 || array[index] == 9 || array[index] == 14 || array[index] == 7 || array[index] == 15) {
                arrayNovo.push(array[index])
            }
        }
    }

    if (arrayNovo.includes(2) && arrayNovo.includes(9) && arrayNovo.includes(14) && arrayNovo.includes(7) && arrayNovo.includes(15)) {
        return "Ganhou"
    } else {
        return "Perdeu"
    }
}


//CP-3.2:



let dados = document.querySelectorAll('input[type="text"], Select')

let botao = document.querySelector('button')

let select = document.querySelector('Select')

let arrayCarros: carro[] = []

botao.addEventListener('click', event => {
    let marca: string = window.localStorage.getItem("Marca")
    let modelo: string = window.localStorage.getItem("Modelo")
    let ano: string = window.localStorage.getItem("Ano")
    let valor: string = window.localStorage.getItem("Valor")
    let cor: string = window.localStorage.getItem("Cor")
    let automatico: boolean = window.localStorage.getItem("Automatico")

    let Carro = new carro(marca, modelo, ano, valor, cor, automatico)
    window.localStorage.setItem('novoCarro', JSON.stringify(Carro))
    console.log(Carro)
    arrayCarros.push(Carro)
})

for (let index = 0; index < dados.length; index++) {
    dados[index].addEventListener('change', handleChange)
    function handleChange(e: Event) {
        let chave
        if (index == 0) {
            chave = "Marca"
            window.localStorage.setItem(chave, e.target.value);
        } else if (index == 1) {
            chave = "Modelo"
            window.localStorage.setItem(chave, e.target.value);
        } else if (index == 2) {
            chave = "Ano"
            window.localStorage.setItem(chave, e.target.value);
        } else if (index == 3) {
            chave = "Valor"
            window.localStorage.setItem(chave, e.target.value);
        } else if (index == 4) {
            chave = "Cor"
            window.localStorage.setItem(chave, e.target.value);
        } else if (index == 5) {
            chave = "Automatico"
            window.localStorage.setItem(chave, e.target.value);
        }
    }
}

class carro {
    Marca
    Modelo
    Ano
    Valor
    Cor
    Automatico

    constructor(marca?: string, modelo?: string, ano?: string, valor?: string, cor?: string, automatico?: boolean) {
        this.Marca = marca
        this.Modelo = modelo
        this.Ano = ano
        this.Valor = valor
        this.Cor = cor
        this.Automatico = automatico
    }
}

function CarrosPorMarca(arrayObejetos: carro[], marca: string) {
    let arrayMesmaMarca = []
    for (let index = 0; index < arrayObejetos.length; index++) {
        if (arrayObejetos[index].Marca == marca) {

            arrayMesmaMarca.push(arrayObejetos[index])
        }
    }
    return arrayMesmaMarca
}

function MarcasDisponiveis(arrayObejetos: carro[]) {
    let ArrayMarcas = []
    for (let index = 0; index < arrayObejetos.length; index++) {
        for (let index2 = 0; index2 < arrayObejetos.length; index2++) {
            if (ArrayMarcas.length != 0) {
                if (arrayObejetos[index].Marca != ArrayMarcas[index2] && ArrayMarcas[index2] != null) {
                    ArrayMarcas.push(arrayObejetos[index].Marca)
                    index2 = arrayObejetos.length
                }

            } else {
                ArrayMarcas.push(arrayObejetos[index].Marca)
                index2 = arrayObejetos.length
            }
        }
    }
    return ArrayMarcas
}

function PropriedadesDesejadas(arrayObejetos: carro[], arrayString: string[]) {
    let arrayCarros2 = []
    let carroCaracteristica = new carro()
    for (let index = 0; index < arrayObejetos.length; index++) {
        for (let index2 = 0; index2 < arrayString.length; index2++) {

            switch (arrayString[index2]) {
                case "Marca":
                    carroCaracteristica.Marca = arrayObejetos[index].Marca
                    break;
                case "Modelo":
                    carroCaracteristica.Modelo = arrayObejetos[index].Modelo
                    break;
                case "Ano":
                    carroCaracteristica.Ano = arrayObejetos[index].Ano
                    break;
                case "Valor":
                    carroCaracteristica.Valor = arrayObejetos[index].Valor
                    break;
                case "Cor":
                    carroCaracteristica.Cor = arrayObejetos[index].Cor
                    break;
                case "Atomatico":
                    carroCaracteristica.Automatico = arrayObejetos[index].Automatico
                    break;
            }
            if (index2 == arrayString.length - 1) {
                arrayCarros2.push(carroCaracteristica)
            }
        }
    }
    return arrayCarros2
}



