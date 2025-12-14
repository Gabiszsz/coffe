const receitas = [
    "Expresso: Moa grãos de café, prepare em uma máquina de expresso por 25-30 segundos.",
    "Cappuccino: Faça um expresso, adicione leite vaporizado e cubra com espuma.",
    "Latte: Prepare expresso, aqueça leite e misture suavemente."
];

document.getElementById('receita-btn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * receitas.length);
    document.getElementById('receita-display').textContent = receitas[randomIndex];
});

function myFunction() {
    var x = document.querySelector(".topnav ul");
    if (x.className === "nav-menu") {
        x.className += " responsive";
    } else {
        x.className = "nav-menu";
    }
}