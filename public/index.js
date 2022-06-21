const typeSelect = document.getElementById("gameTypeSelect");
const playerSelect = document.getElementById("playerNumSelect");
const submit = document.getElementById("submitButton") 

submit.addEventListener("click", function () {
    // fetch(`/api/games/search/numberOfPlayers/${playerSelect.value}/gameType/${typeSelect.value}`)
    //     .then(res => {
    //         console.log(res)
    //         return res.json()
    //     })
    //     .then(data => {
    //         console.log(data)
    //     })
    window.location = `/api/games/search/numberOfPlayers/${playerSelect.value}/gameType/${typeSelect.value}`
    })
