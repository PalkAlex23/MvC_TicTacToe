export default class Mezo {
    #jel
    #index
    #szuloELEM

    constructor(jel, index, szuloELEM) {
        this.#jel =  jel
        this.#index = index
        this.#szuloELEM = szuloELEM

        this.mezoKiir()

        this.gombElem = $(".card:last-child")
        // csak üres mezőre hívjuk meg a saját eseményt
        if (this.#jel === " ") {
            this.gombKattint()
        }
    }

    mezoKiir(){
        this.#szuloELEM.append(
            `
            <div class="card col-lg-4">
                <h3 class="text-center">${this.#jel}</h3>
            </div>
            `
        )
    }

    gombKattint() {
        this.gombElem.on("click", () => {
            const e = new CustomEvent("katt", {detail: this.#index})
            window.dispatchEvent(e);
        })
    }
}

