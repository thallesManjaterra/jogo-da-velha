const x = document.querySelector('.x')
const o = document.querySelector('.o')
const boxes = document.querySelectorAll('.box')
const buttons = document.querySelectorAll('#buttons-container button')
const messageContainer = document.querySelector('#message')
const messageText = document.querySelector('#message p')
let secondPlayer

// contador de jogadas
let player1 = 0
let player2 = 0

// adicionando o evento de click aos boxes
for (let i = 0; i < boxes.length; i += 1) {
  // quando alguem clica na caixa
  boxes[i].addEventListener('click', function () {
    let el = checkEl(player1, player2)

    // verifica se box já tem O ou X
    if (this.childNodes.length == 0) {
      let cloneEl = el.cloneNode(true)
      this.appendChild(cloneEl)

      //computar jogada
      if (player1 == player2) {
        player1 += 1

        if (secondPlayer == 'ai-player') {
          // função executar a jogada
          computerPlay()
          player2++
        }
      } else {
        player2 += 1
      }

      // check win condition
      checkWinCondition()
    }
  })
}

for (const btn of buttons) {
  btn.addEventListener('click', function () {
    secondPlayer = this.getAttribute('id')
    for (let btn of buttons) {
      btn.style.display = 'none'
    }
    setTimeout(() => {
      let container = document.querySelector('#container')
      container.classList.remove('hide')
    }, 500)
  })
}

// Vê quem vai jogar
function checkEl(player1, player2) {
  let el
  if (player1 == player2) {
    el = x
  } else {
    el = o
  }
  return el
}

function checkWinCondition() {
  let b1 = document.getElementById('block1')
  let b2 = document.getElementById('block2')
  let b3 = document.getElementById('block3')
  let b4 = document.getElementById('block4')
  let b5 = document.getElementById('block5')
  let b6 = document.getElementById('block6')
  let b7 = document.getElementById('block7')
  let b8 = document.getElementById('block8')
  let b9 = document.getElementById('block9')

  // horizontal
  if (
    b1.childNodes.length > 0 &&
    b2.childNodes.length > 0 &&
    b3.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className
    let b2Child = b2.childNodes[0].className
    let b3Child = b3.childNodes[0].className
    if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
      declareWinner('x')
    } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o')
      declareWinner('o')
  }
  if (
    b4.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b6.childNodes.length > 0
  ) {
    let b4Child = b4.childNodes[0].className
    let b5Child = b5.childNodes[0].className
    let b6Child = b6.childNodes[0].className
    if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
      declareWinner('x')
    } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o')
      declareWinner('o')
  }
  if (
    b7.childNodes.length > 0 &&
    b8.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b7Child = b7.childNodes[0].className
    let b8Child = b8.childNodes[0].className
    let b9Child = b9.childNodes[0].className
    if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
      declareWinner('x')
    } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o')
      declareWinner('o')
  }

  // vertical
  if (
    b1.childNodes.length > 0 &&
    b4.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className
    let b4Child = b4.childNodes[0].className
    let b7Child = b7.childNodes[0].className
    if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
      declareWinner('x')
    } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o')
      declareWinner('o')
  }
  if (
    b2.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b8.childNodes.length > 0
  ) {
    let b2Child = b2.childNodes[0].className
    let b5Child = b5.childNodes[0].className
    let b8Child = b8.childNodes[0].className
    if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
      declareWinner('x')
    } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o')
      declareWinner('o')
  }
  if (
    b3.childNodes.length > 0 &&
    b6.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].className
    let b6Child = b6.childNodes[0].className
    let b9Child = b9.childNodes[0].className
    if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
      declareWinner('x')
    } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o')
      declareWinner('o')
  }

  // diagonal
  if (
    b1.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className
    let b5Child = b5.childNodes[0].className
    let b9Child = b9.childNodes[0].className
    if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
      declareWinner('x')
    } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o')
      declareWinner('o')
  }
  if (
    b3.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].className
    let b5Child = b5.childNodes[0].className
    let b7Child = b7.childNodes[0].className
    if (b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
      declareWinner('x')
    } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o')
      declareWinner('o')
  }

  // deu velha
  let counter = 0

  for (let i = 0; i < boxes.length; i += 1) {
    if (boxes[i].childNodes[0]) {
      counter += 1
    }
  }

  if (counter == 9) {
    declareWinner('deu velha!')
  }
}

// limpa o jogo, declara o vencedor e atualiza o placar
function declareWinner(winner) {
  let scoreboardX = document.querySelector('#scoreboard-1')
  let scoreboardY = document.querySelector('#scoreboard-2')
  let msg = ''

  if (winner == 'x') {
    scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1
    msg = 'O jogador 1 venceu'
  } else if (winner == 'o') {
    scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1
    msg = 'O jogador 2 venceu'
  } else {
    msg = 'Deu velha!'
  }

  // exibe mensagem
  messageText.innerHTML = msg
  messageContainer.classList.remove('hide')

  // esconde mensagem
  setTimeout(() => {
    messageContainer.classList.add('hide')
    // remove x e o
    let boxesToRemove = document.querySelectorAll('.box div')
    for (let i = 0; i < boxesToRemove.length; i += 1) {
      boxesToRemove[i].parentNode.removeChild(boxesToRemove[i])
    }
  }, 2000)

  // zera as jogadas
  player1 = 0
  player2 = 0
}

// executar lógica da jogada do CPU
function computerPlay() {
  let cloneO = o.cloneNode(true)
  counter = 0
  filled = 0
  // só prenncher se estiver vázio o filho
  for (let i = 0; i < boxes.length; i += 1) {
    let randomNumber = Math.floor(Math.random() * 5)
    if (boxes[i].childNodes[0] == undefined) {
      if (randomNumber <= 1) {
        boxes[i].appendChild(cloneO)
        counter += 1
        break
      }
    } else {
      filled += 1
    }
  }
  if (counter == 0 && filled < 9) {
    computerPlay()
  }
}
