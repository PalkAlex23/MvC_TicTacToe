import Palya from "../view/Palya.js"
import TTTModell from "../modell/TTTModel.js"


export default class TTTController {
    // példányosítja a modellt és a view-t
    // feliratkozik az eseménykezelőre
    constructor() {
        this.taroloElem = $(".tartalom")
        this.tttModell = new TTTModell()
        new Palya(this.tttModell.getList(), this.taroloElem)
        this.#esemenykezelo()
    }

    #esemenykezelo() {
        $(window).on("katt", (event)=>{
            console.log(event.detail)
            this.tttModell.lepteto(event.detail);
            new Palya(this.tttModell.getList(), this.taroloElem)
        })
    }
}