class Transcibed {
    constructor(text) {
        this.text = text;
    }

    get text() {
        return `${this.text}`
    }

    set text(new_text) {
        this.text = new_text;
    }
}
export default Transcibed;