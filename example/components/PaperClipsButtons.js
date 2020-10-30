import { Element } from "test-juggler";

export default class PaperClipsButtons extends Element{
    constructor() {
        super(".leftColumn");
        this.MakePaperclip = this.newChildElement("#btnMakePaperclip");
        this.LowerPrice = this.newChildElement(".btnLowerPrice");
       
    }
}