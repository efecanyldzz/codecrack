class StoredConf {
    constructor() {
        this.querys()
        
        this.leaderboard()
        this.musicBox()
    }

    querys() {
        this.titleLb = document.getElementById('leaderboard-title')
        this.musicPlayer = document.getElementsByClassName('music-player')[0]
        this.inputMusic = document.getElementsByClassName('input-field')[0]
    }

    leaderboard() {
        if (localStorage.getItem('titleLeaderboard')) {
            this.titleLb.innerText = localStorage.titleLeaderboard
        }
    }

    musicBox() {
        if (localStorage.getItem('musicURL')) {
            this.musicPlayer.innerHTML = localStorage.getItem('musicURL')
            this.inputMusic.value = localStorage.getItem('musicURL')
        }
    }
}