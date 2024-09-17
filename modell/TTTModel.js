export default class TTTModell {
    // előállítja az oldal aktuális állapotát
    #LISTA = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
    #lepes
    #aktElem
    constructor() {
        this.#lepes = 0
        this.#setAktelem()
    }

    #setAktelem() {
        if (this.#lepes % 2 === 0) {
            this.#aktElem = "X"
        } else {
            this.#aktElem = "O"
        }
    }
    /*
    getAktelem() {
        return this.#aktElem
    }
    */

    getList() {
        return this.#LISTA
    }

    lepteto(index) {
        this.#LISTA[index] = this.#aktElem
        this.#lepes++
        this.#setAktelem()
    }
}