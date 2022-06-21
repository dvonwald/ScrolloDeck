const loginFormHandler = async (event) => {
  event.preventDefault();

  const gameName = document.querySelector("#game-name").value.trim();
  const gameType = document.querySelector("#game-type").value;
  const maxGameLength = document.querySelector("#max-game-length").value.trim();
  const minGameLength = document.querySelector("#min-game-length").value.trim();
  const maxNumberOfPlayers = document
    .querySelector("#max-number-of-players")
    .value.trim();
  const minNumberOfPlayers = document
    .querySelector("#min-number-of-players")
    .value.trim();
  const gameDescription = document
    .querySelector("#game-description")
    .value.trim();

  if (
    gameName &&
    gameType &&
    maxGameLength &&
    minGameLength &&
    minNumberOfPlayers &&
    maxNumberOfPlayers &&
    gameDescription
  ) {
    const response = await fetch("/api/games/addgame", {
      method: "POST",
      body: JSON.stringify({
        gameName,
        gameType,
        maxGameLength,
        minGameLength,
        minNumberOfPlayers,
        maxNumberOfPlayers,
        gameDescription,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log(response);
      document.location.replace("/");
    } else {
      alert("Failed to add game.");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
