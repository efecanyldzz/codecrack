const initializeChat = _ => {
  const EMOJIS = document.getElementsByClassName("emojiPreview");
  const INPUT  = document.getElementById("chat-input");

  const chat = new Chat(EMOJIS, INPUT);
  chat.addEmojiToChat();
};

const fixOptions = _ => {
  const SHOW_LEADERBOARD = document.querySelectorAll('div[category="huds"]')[1].children[1].children[1];
  const LEADERBOARD_HUD = document.getElementById("leaderboard");
  const LEADERBOARD_TITLE = document.getElementById("leaderboard-title");

  SHOW_LEADERBOARD.addEventListener("click", _ => {
    if (LEADERBOARD_HUD.style.display === "none") {
      LEADERBOARD_TITLE.style.display = "none";
    } else {
      LEADERBOARD_TITLE.style.display = "flex";
    }
  });
};

const initOptions = _ => {
  const SETTINGS_BUTTON = document.getElementById("open-settings-menu");

  SETTINGS_BUTTON.addEventListener("click", _ => {
    fixOptions();

    const INPUT_BOPT = document.getElementById("leaderboard-input");

    if (INPUT_BOPT == null) {
      const ACTOPT = new ActiveOptions();
      ACTOPT.actLeaderboard();
    }
  });
  setTimeout(_ => document.getElementById('create-room').click(), 1000);
};

const fixStreamMode = _ => {
  const STREAM_BUTTON = document.getElementById("toggle-streammode");
  const TAG = document.getElementById("tag");

  const INPUT_ELEMENTS = ["nick1", "nick2", "skin1", "skin2"];

  STREAM_BUTTON.addEventListener("click", e => {
    INPUT_ELEMENTS.forEach(e => {
      if (tag.classList == "input-field") {
        document.getElementById(e).classList.add("stream-mode");
      } else {
        document.getElementById(e).classList.remove("stream-mode");
      }
    });
  });
};

const initLeaderboard = _ => {
  const CONTAINER = document.getElementById("leaderboard");
  const PLAYERS_NUMBERS = 15;

  const Leaderboard_PLAYERS = new Leaderboard(CONTAINER);
  Leaderboard_PLAYERS.addPlayers(PLAYERS_NUMBERS);
};

const initMassBar = _ => {
  const MASS_PLAYERS = document.getElementsByClassName("mass");
  const MASS_BAR_CONTAINER = document.getElementsByClassName("mass-bar");
  const TOTAL_MASS = document.getElementById("team-data-mass");

  const observer = new MutationObserver(function() {
    [...MASS_BAR_CONTAINER].forEach((bar, index) => bar.style.width = (MASS_PLAYERS[index].innerText / TOTAL_MASS.innerText) * 100 + "%");
  });
  
  [...MASS_PLAYERS].forEach(mass => observer.observe(mass, { childList: true }));
};

const initTotalLeaderboardMass = _ => {
  const totalLeaderboardMass = new TotalLeaderboardMass()

  let joinRoomButton   = document.getElementById('join-room');
  let createRoomButton = document.getElementById('create-room');

  let buildTotalMassContainer = _ => {
      let leaderboardContainer = document.getElementById('leaderboard').childElementCount

      if (leaderboardContainer == 16) {
          totalLeaderboardMass.attributesToContainer()
          totalLeaderboardMass.buildContainer()
          totalLeaderboardMass.insertInTheLeaderboard()
      }
  }

  //observer...
  totalLeaderboardMass.calculateTotal()

  joinRoomButton.addEventListener('click', _ => {
      totalLeaderboardMass.calculateTotal()
      buildTotalMassContainer()
  })

  createRoomButton.addEventListener('click', _ => {
      buildTotalMassContainer()
  })
};

const storedConf = _ => {
  const storedConf = new StoredConf();
};

const initMusciBox = _ => {
  const musicBox = new MusicBox();
};

onload = _ => {
  initLeaderboard();
  initMassBar();
  initMusciBox();

  initializeChat();

  initOptions();
  fixStreamMode();
  
  storedConf();
};