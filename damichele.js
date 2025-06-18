const menu = [
    { nome: "Margherita", prezzo: "10,00 €" },
    { nome: "Mortadella", prezzo: "15,00 €" },
    { nome: "Patatine", prezzo: "13,00 €" },
    { nome: "Diavola", prezzo: "12,00 €" },
    { nome: "Quattro Formaggi", prezzo: "14,00 €" }
];

const button = document.querySelector(".menu-button");
const menuList = document.getElementById("menu-list");
let menuVisible = false;

button.addEventListener("click", () => {
    if (!menuVisible) {
        let html = "<ul>";
        menu.forEach(pizza => {
            html += `<li><strong>${pizza.nome}</strong> - ${pizza.prezzo}</li>`;
        });
        html += "</ul>";
        menuList.innerHTML = html;
        menuList.classList.remove("hidden");
        button.textContent = "Nascondi il Menu'";
    } else {
        menuList.classList.add("hidden");
        menuList.innerHTML = "";
        button.textContent = "Guarda il Menu' completo";
    }
    menuVisible = !menuVisible;
});
