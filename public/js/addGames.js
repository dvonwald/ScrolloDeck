const loginFormHandler = async (event) => {
  event.preventDefault();

  const gameName = document.querySelector("#username").value.trim();
  const gameType = document.querySelector("#password").value.trim();
  const maxGameLength = document.querySelector("#password").value.trim();
  const minGameLength = document.querySelector("#password").value.trim();
  const minNumberOfPlayers = document.querySelector("#password").value.trim();
  const maxNumberofPlayers = document.querySelector("#password").value.trim();
  const gameDescription = document.querySelector("#password").value.trim();

  if (gameName && gameType && maxGameLength && minGameLength && minNumberOfPlayers && maxNumberofPlayers && gameDescription) {
    const response = await fetch("/api/games/addgame", {
      method: "POST",
      body: JSON.stringify({ gameName, gameType, maxGameLength, minGameLength, minNumberOfPlayers, maxNumberofPlayers, gameDescription }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to add game.");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);