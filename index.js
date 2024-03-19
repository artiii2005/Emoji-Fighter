let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    stageEl.textContent = randomItem() + " vs " + randomItem()
})

function randomItem() {
    let randomIndex = Math.floor(Math.random() * fighters.length)
    return fighters[randomIndex]
}

console.log(randomItem())