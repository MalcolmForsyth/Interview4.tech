class TranscribedTemplate {
    constructor(text2, words2, duration2) {
        this._text = text2;
        this._words = words2;
        this._duration = duration2;
    }


    get words() {
        return this._words
    }

    get duration() {
        return this._duration
    }

    get text() {
        return `${this._text}`
    }

    set text(new_text) {
        this._text = new_text;
    }
    set duration(new_duration) {
        this._duration = new_duration;
    }
    set words(new_words) {
        this._words = new_words;
    }

}
export default TranscribedTemplate;
