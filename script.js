// Losowe dane do kłótni
const subjects = ["Ty", "Twoja matka", "Twoje pomysły", "Twoja aplikacja", "Ten kod"];
const verbs = ["są", "były zawsze", "zawsze będą"];
const adjectives = ["beznadziejne", "dziwne", "niesamowite", "śmieszne"];
const endings = ["...", "i tyle!", "tak powiedział bot.", "serio?!"];

// Funkcja generująca losową wypowiedź
function generateSentence() {
  const subject = subjects[Math.floor(Math.random() * subjects.length)];
  const verb = verbs[Math.floor(Math.random() * verbs.length)];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const ending = endings[Math.floor(Math.random() * endings.length)];
  return `${subject} ${verb} ${adjective} ${ending}`;
}

// Dodawanie kłótni do ekranu
const conversationDiv = document.getElementById("conversation");

function addMessage(bot, message) {
  const paragraph = document.createElement("p");
  paragraph.classList.add(bot === "A" ? "bot-a" : "bot-b");
  paragraph.textContent = `${bot === "A" ? "Bot A:" : "Bot B:"} ${message}`;
  conversationDiv.appendChild(paragraph);
  conversationDiv.scrollTop = conversationDiv.scrollHeight; // Automatyczne przewijanie
}

// Rozpoczynanie kłótni
document.getElementById("startFight").addEventListener("click", () => {
  const messageA = generateSentence();
  const messageB = generateSentence();
  addMessage("A", messageA);
  addMessage("B", messageB);
});

// Czyszczenie kłótni
document.getElementById("clearChat").addEventListener("click", () => {
  conversationDiv.innerHTML = "";
});
