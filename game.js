let socket;
let currentPlayer = 'X'; // Startowy gracz
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let username = '';

// Przycisk startowy
document.getElementById('startBtn').addEventListener('click', () => {
    username = document.getElementById('username').value;
    if (!username) {
        alert('Proszę podać nazwę!');
        return;
    }
    document.getElementById('usernameInput').classList.add('hidden');
    document.getElementById('modeSelect').classList.remove('hidden');
});

// Tryb z botem
document.getElementById('botModeBtn').addEventListener('click', () => {
    startGame('bot');
});

// Tryb multiplayer
document.getElementById('multiplayerModeBtn').addEventListener('click', () => {
    document.getElementById('modeSelect').classList.add('hidden');
    document.getElementById('multiplayerOptions').classList.remove('hidden');
});

// Tworzenie lobby
document.getElementById('createLobbyBtn').addEventListener('click', () => {
    socket = io.connect('https://twoj-serwer.glitch.me'); // Połącz z serwerem Glitch
    socket.emit('createLobby', username);
    socket.on('lobbyCreated', (lobbyCode) => {
        alert(`Stworzyłeś lobby. Kod: ${lobbyCode}`);
    });
});

// Dołączanie do lobby
document.getElementById('joinLobbyBtn').addEventListener('click', () => {
    const code = document.getElementById('lobbyCode').value;
    if (!code) {
        alert('Wpisz kod lobby');
        return;
    }
    socket.emit('joinLobby', { code, username });
});

// Inicjowanie planszy
function initBoard() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    const board = document.getElementById('ticTacToeBoard');
    board.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('click', () => makeMove(i));
        board.appendChild(cell);
    }
    document.getElementById('gameBoard').classList.remove('hidden');
    document.getElementById('playerTurn').textContent = currentPlayer;
}

// Funkcja do wykonywania ruchu
function makeMove(index) {
    if (gameBoard[index]) return; // Jeśli komórka już jest zajęta, nie wykonuj ruchu
    gameBoard[index] = currentPlayer;
    renderBoard();
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    document.getElementById('playerTurn').textContent = currentPlayer;
}

// Renderowanie planszy
function renderBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        cell.textContent = gameBoard[index];
    });
}

// Sprawdzanie zwycięzcy
function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const [a, b, c] of winningCombinations) {
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            alert(`${gameBoard[a]} Wygrał!`);
            return;
        }
    }

    if (!gameBoard.includes('')) {
        alert('Remis!');
    }
}

// Inicjacja gry z botem
function startGame(mode) {
    document.getElementById('modeSelect').classList.add('hidden');
    initBoard();
    if (mode === 'bot') {
        // Tu możesz dodać logikę dla bota
    }
}
