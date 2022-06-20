const typeSelect = document.getElementById("gameTypeSelect");
const playerSelect = document.getElementById("playerNumSelect");
const submit = document.getElementById("submitButton") 

console.log(typeSelect);
console.log(typeSelect.option[0]);
console.log(typeSelect.option[0].value);
alert(typeSelect.option[0].value);

function filter() {
    fetch(`../../controllers/api/games/search/minNumberOfPlayers/${playerSelect.value}/gameType/${typeSelect.value}`)
        .then(res => {
            console.log(res.json())
        })
    }

    submit.addEventListener("click", filter())
