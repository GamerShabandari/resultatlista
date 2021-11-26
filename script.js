let spelare = ["Gamer", "Maldini" , "Weah", "Zlatan", "Kaka", "Seedorf"];

console.log(spelare);

let spelarnasPoang = [0, 0, 0, 0, 0, 0];

console.log(spelarnasPoang);

let minContainer = document.getElementById("container");


for (let i = 0; i < spelare.length; i++){

    minContainer.insertAdjacentHTML("beforeend","<li>"+spelare[i]+"</li>");
    minContainer.insertAdjacentHTML("beforeend", "<li>" + "poäng: " +spelarnasPoang[i]+"</li>");
    minContainer.insertAdjacentHTML("beforeend","<button> - </button>");
    minContainer.insertAdjacentHTML("beforeend","<button> + </button>");

};
