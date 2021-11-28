
let allPlayers = [

    {
        name: "Gamer",
        points: 0
    },    
    {
        name: "Maldini",
        points: 0
    },
    {
        name: "Kaka",
        points: 0
    },
    {
        name: "Zlatan",
        points: 0
    }
];


let minContainer = document.getElementById("container");

let addPlayer = document.getElementById("addPlayer");

let addPlayerBtn = document.getElementById("addPlayerBtn");

function apendPlayers (){

    minContainer.innerHTML = "";

    for (let i = 0; i < allPlayers.length; i++){

        minContainer.insertAdjacentHTML("beforeend","<li>"+allPlayers[i].name+"</li>");
        minContainer.insertAdjacentHTML("beforeend", "<li>poäng: "+allPlayers[i].points+"</li>");

        let plus = [i] + "+";
        let minus = [i] + "-";
        console.log(plus);
        console.log(minus);

        minContainer.insertAdjacentHTML("beforeend","<button id="+minus+"> - </button>");
        minContainer.insertAdjacentHTML("beforeend","<button id="+plus+"> + </button>");
    };

};


addPlayerBtn.addEventListener("click", function(){

    let nySpelare = {
        name : addPlayer.value,
        points : 0
    }
    allPlayers.push(nySpelare);

    console.log(allPlayers);

    apendPlayers();
});


apendPlayers ();