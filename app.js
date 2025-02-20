
let bank = 100

const players = [
  { teamNumber: 1, emoji: '🏃‍♂️', skill: 10, name: "D'Marcus Williums" },
  { teamNumber: 1, emoji: '🤾‍♂️', skill: 30, name: "Tyroil Smoochie-Wallace" },
  { teamNumber: 1, emoji: '🏇', skill: 88, name: "Jackmerius Tacktheratrix" },
  { teamNumber: 1, emoji: '🏌️‍♀️', skill: 15, name: "Javaris Jamar Javarison-Lamar" },
  { teamNumber: 1, emoji: '🏋️‍♂️', skill: 77, name: "D'Pez Poopsie" },
  { teamNumber: 1, emoji: '🏌️‍♂️', skill: 21, name: "D'Jasper Probincrux III" },
  { teamNumber: 1, emoji: '🤾', skill: 5, name: "Leoz Maxwell Jilliumz" },
  { teamNumber: 1, emoji: '🏂', skill: 99, name: "Hingle McCringleberry" },
  { teamNumber: 1, emoji: '🧘‍♀️', skill: 50, name: "L'Carpetron Dookmarriot" },
  { teamNumber: 1, emoji: '🚶‍♀️', skill: 1, name: "Xmus Jaxon Flaxon-Waxon" },
  { teamNumber: 2, emoji: '🏋️‍♀️', skill: 61, name: "Saggitariutt Jefferspin" },
  { teamNumber: 2, emoji: '🤺', skill: 34, name: "Quatro Quatro" },
  { teamNumber: 2, emoji: '🏄', skill: 71, name: "X-Wing @Aliciousness" },
  { teamNumber: 2, emoji: '🧜‍♂️', skill: 76, name: "Bisquiteen Trisket" },
  { teamNumber: 2, emoji: '🤸', skill: 47, name: "Scoish Velociraptor Maloish" },
  { teamNumber: 2, emoji: '⛹️‍♀️', skill: 23, name: "Donkey Teeth" },
  { teamNumber: 2, emoji: '🕴️', skill: 58, name: "T.J. A.J. R.J. Backslashinfourth V" },
  { teamNumber: 2, emoji: '💃', skill: 99, name: "Firstname Lastname" },
  { teamNumber: 2, emoji: '🧍‍♂️', skill: 3, name: "Dan Smith" },
  { teamNumber: 2, emoji: '🐅', skill: 100, name: "Tiger" },


]

function drawTeamOne() {
  let emoji = ''

  for (let i = 0; i < players.length; i++) {
    const athletes = players[i];
    if (athletes.teamNumber == '1') {
      emoji += athletes.emoji
    }

  }
  console.log('Team One Emojis', emoji);

  const teamOneElem = document.getElementById('team-one')

  teamOneElem.innerText = emoji
}

function drawTeamTwo() {
  let emoji = ''

  for (let i = 0; i < players.length; i++) {
    const athletes = players[i];
    console.log('athletes', athletes)
    if (athletes.teamNumber == '2') {
      emoji += athletes.emoji
      console.log('emoji', emoji)

    }

  }
  console.log('Team Two Emojis', emoji);

  const teamTwoElem = document.getElementById('team-two')
  console.log('teamTwoElem', teamTwoElem)
  teamTwoElem.innerText = emoji
}

function drawBank() {
  let bankElem = document.getElementById('bank');
  if (bankElem) {
    bankElem.innerText = `$${bank}`;
  }

}

function draftPlayers() {
  players.forEach(player => {
    const randomTeamNumber = Math.ceil(Math.random() * 2)
    player.teamNumber = randomTeamNumber
  })
  drawTeamOne()
  drawTeamTwo()
}

function betTeamOne(betAmount) {
  if (betAmount > bank) {
    window.alert('You do not have enough $funds$ to bet $${betAmount}')
    return
  }

  const teamOnePlayers = players.filter(player => player.teamNumber == 1)
  const teamTwoPlayers = players.filter(player => player.teamNumber == 2)

  let teamOneTotalSkill = 0
  let teamTwoTotalSkill = 0

  if (teamOneTotalSkill > teamTwoTotalSkill) {
    bank += betAmount
  }

  else if (teamTwoTotalskill.teamOneTotalSkill) {
    bank -= betAmount
  }

  draftPlayers()
  drawBank()
}



//draftPlayers()
drawBank()
//drawTeamOne()
//drawTeamTwo()