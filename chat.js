class Chat {
    constructor(emojis, input) {
        this.emojis = emojis
        this.input = input

        this.addEmojiToChat()
    }

    addEmojiToChat() {
        [...this.emojis].forEach(emoji => emoji.onclick = _ => this.input.value += emoji.id);
    }
}