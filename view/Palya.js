import Mezo from "./Mezo.js"

export default class Palya {

    #lista = []
    #szuloELEM

    constructor(lista, szuloELEM) {
        this.#lista = lista
        this.#szuloELEM = szuloELEM
        this.#szuloELEM.empty()
        this.kartyakKiir()
    }

    kartyakKiir() {
        this.#lista.forEach((elem, index) => {
            new Mezo(elem, index, this.#szuloELEM)
        })
    }
}