const sadMusic = document.getElementById("sadMusic");

document.getElementById("button").addEventListener("click", () => {
  document.getElementById("button").style.display = "none";
  document.getElementById("emoji").style.display = "none";
  sadMusic.play();
  startCountdown();
  launchHearts();
});

function startCountdown() {
  const countdown = document.getElementById("countdown");
  countdown.style.display = "block";
  let time = 3;
  const interval = setInterval(() => {
    countdown.textContent = time;
    time--;
    if (time < 0) {
      clearInterval(interval);
      countdown.style.display = "none";
      showMessage();
    }
  }, 1000);
}

function showMessage() {
  const msg = document.getElementById("message");
  msg.innerHTML = "Eu sei que errei... e estou aqui de coração aberto pra te pedir desculpas 😔<br><br>Você pode me perdoar?";
  msg.style.opacity = 1;
  document.getElementById("choices").style.display = "flex";
}

function respond(isForgiven) {
  const finalMsg = document.getElementById("final-response");
  if (isForgiven) {
    finalMsg.innerHTML = "Você não tem ideia de como isso me faz feliz! Muito obrigado por me perdoar ❤️";
  } else {
    finalMsg.innerHTML = "Poxa... isso me deixa muito triste 😢<br>Mas será que você pode me dar um 'sim'? 🙏";
  }
}

function launchHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }
}