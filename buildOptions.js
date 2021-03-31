class BuildOptions {
    constructor() {
        this.container = document.createElement('div')
        this.name = document.createElement('div')
        this.input = document.createElement('input')

        console.log('loaded')

        this.setLbAttributes()
        this.buildLbElement()
    }
    
    setLbAttributes() {
        this.container.classList.add('option', 'input')
        this.container.id = 'leaderboard-input'

        this.name.classList.add('name')
    }
    
    buildLbElement() {
        this.container.appendChild(this.name)
        this.name.innerText = 'Leaderboard title'
        this.container.appendChild(this.input)
    }
}

class InsertToSettings extends BuildOptions {
    constructor() {
        super()
        this.leaderboard()
    }

    leaderboard() {
        console.log('leaderboard loaded')
        this.referencePoint = document.getElementsByClassName('option range')[21]
        this.referencePoint.insertAdjacentElement('beforebegin', this.container)
    }
}


class ActiveOptions extends InsertToSettings {
    constructor() {
        super()
        this.inputSelector = document.getElementsByTagName('input')[68]
        this.titleLeaderboard = document.getElementById('leaderboard-title')
        this.settings = document.getElementById('settings-menu')
        this.closeButton = document.getElementById('close-settings-menu')
    }
    
    actLeaderboard() {
        this.inputSelector.placeholder = 'Change the leaderboard title'
        this.inputSelector.maxLength = 40
        this.inputSelector.value = this.titleLeaderboard.innerText
        
        const INPUT_LETTERS = _ => {
            const inputValue = this.inputSelector.value
            
            const validate = inputValue != '' && inputValue != ' '
            
            if (validate) {
                this.titleLeaderboard.innerText = inputValue
                localStorage.setItem('titleLeaderboard', this.titleLeaderboard.innerText)
            }
        }

        this.inputSelector.addEventListener('input', INPUT_LETTERS)
        
        this.closeButton.addEventListener('click', _ => {
            this.inputSelector.value = this.titleLeaderboard.innerText
        })
    }
}