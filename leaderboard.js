class Leaderboard {
    constructor(container) {
        this.container = container
        this.playerMass = document.getElementsByClassName('name');
        this.buildBoxPlayer()
    }

    buildBoxPlayer() {
        this.boxPlayers = document.createElement('div')  
        this.boxPlayers.classList.add('slot')

        const namePlayers = document.createElement('div')
        namePlayers.classList.add('name')
        const positionPlayers = document.createElement('div')
        positionPlayers.classList.add('position')

        this.boxPlayers.appendChild(namePlayers)
        this.boxPlayers.appendChild(positionPlayers)
      
        this.container.appendChild(this.boxPlayers)
    }

    addPlayers(playersNumbers) {
        for (let i = 0; i < playersNumbers - 1; i++) {
            this.container.insertAdjacentHTML('afterbegin', this.boxPlayers.outerHTML)
        }
    }
}