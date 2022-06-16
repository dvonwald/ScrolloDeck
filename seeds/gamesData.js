const { Games } = require("../models");

const gamesData = [
  {
    gameName: "Exploding Kittens",
    gameType: "card",
    minGameLength: 15,
    maxGameLength: 60,
    minNumberOfPlayers: 2,
    maxNumberOfPlayers: 4,
    gameDescription:
      "Exploding Kittens is a kitty-powered version of Russian Roulette. Players take turns drawing cards until someone draws an exploding kitten and loses the game. The deck is made up of cards that let you avoid exploding by peeking at cards before you draw, forcing your opponent to draw multiple cards, or shuffling the deck.",
  },
  {
    gameName: "Unstable Unicorns",
    gameType: "card",
    minGameLength: 30,
    maxGameLength: 60,
    minNumberOfPlayers: 2,
    maxNumberOfPlayers: 8,
    gameDescription:
      "Build a Unicorn Army. Betray your friends. Unicorns are your friends now.Unstable Unicorns is a strategic card game about everyone's two favorite things: Destruction & Unicorns. The goal of Unstable Unicorns is to be the first person to collect seven Unicorns in your play area, also known as your Stable. Use Magic, Instant, Upgrade, and Downgrade cards to hinder your opponents’ progress and destroy their Unicorns. But beware -- each player has all of these tools at their disposal as well, and you may just find your plans foiled by a well-played “Neigh!” card. Get ready to destroy your friendships...but in a good way.",
  },
  {
    gameName: "Honey Heist",
    gameType: "rpg",
    minGameLength: 30,
    maxGameLength: 80, //i.e 1.5 hours
    minNumberOfPlayers: 2,
    maxNumberOfPlayers: 6,
    gameDescription:
      "Honey Heist is a free one-page role-playing game by Grant Howitt in which the player characters are criminals about to pull off an intricate theft, but who are also bears. It is intended for one-shot play.",
  },
  {
    gameName: "Lasers and Feelings",
    gameType: "rpg",
    gameLength: "",
    minNumberOfPlayers: 1,
    maxNumberOfPlayers: 100,
    gameDescription:
      "Lasers & Feelings is an RPG about fast-paced space action. You and your crew explore the stars aboard the scout ship Raptor until things go terribly awry and you have to undertake a dangerous new adventure without your beloved captain.",
  },
  {
    gameName: "Happy Little Dinosaurs",
    gameType: "board game",
    minGameLength: 30,
    maxGameLength: 60,
    minNumberOfPlayers: 2,
    maxNumberOfPlayers: 4,
    gameDescription:
      "Lately, it feels like we’re all just dinosaurs trying to avoid the falling meteors.In this 2-4 player game, you’ll try to dodge all of life’s little disasters while tuning out your incredibly rude inner demons. You might fall into a pit of hot lava or get ghosted by your dino date. But think happy thoughts because the dino who survives it all wins the game!",
  },
  {
    gameName: "Moonrakers",
    gameType: "board game",
    minGameLength: 20,
    maxGameLength: 80,
    minNumberOfPlayers: 2,
    maxNumberOfPlayers: 6,
    gameDescription:
      "A combination of negotiation & deck-building, Moonrakers is the perfect mix of competition, co-operation, and strategy that leads to unforgettable moments with family & friends.",
  },
];

const seedGamesData = () => Games.bulkCreate(gamesData);

module.exports = seedGamesData;
