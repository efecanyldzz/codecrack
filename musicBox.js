class MusicBox {
    constructor() {
        this.musicPlayer = document.getElementsByClassName('music-player')[0]
        this.musicButton = document.getElementsByClassName('music-button')[0]
        this.inputFrame  = document.getElementsByClassName('input-field')[0]
        this.iframe      = document.getElementsByTagName('iframe')[0]
        
        this.hideInputField()
        this.loadMusic()
    }

    hideInputField() {
        this.musicButton.addEventListener('click', _ => {
            if (this.inputFrame.style.display == "none") {
                this.inputFrame.style.display = "flex"
                this.musicButton.firstElementChild.innerHTML = 'keyboard_arrow_down'
            } else {
                this.inputFrame.style.display = "none"
                this.musicButton.firstElementChild.innerHTML = 'keyboard_arrow_right'
            }
        })
    }

    loadMusic() {
        this.inputFrame.addEventListener('input', _ => {
            const iframeRegex = /(?:<iframe[^>]*)(?:(?:\/>)|(?:>.*?<\/iframe>))/
            if (iframeRegex.test(this.inputFrame.value)) {
                this.musicPlayer.innerHTML = this.inputFrame.value
                localStorage.setItem('musicURL', this.inputFrame.value)
            }
        })
    }
}