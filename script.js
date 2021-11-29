
// array med spelare och deras poäng

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

//funktion som först tömmer sidan och därefter lägger till en lista med spelare på sidan med 2 knappar var

function apendPlayers (){

    minContainer.innerHTML = "";

    for (let i = 0; i < allPlayers.length; i++){

        minContainer.insertAdjacentHTML("beforeend","<li>"+allPlayers[i].name+"</li>");
        minContainer.insertAdjacentHTML("beforeend", "<li>poäng: "+allPlayers[i].points+"</li>");

        //let plus = [i] + "+";
        //let minus = [i] + "-";

        let plus = [i];
        let minus = [i];
        //console.log(plus);
        //console.log(minus);

        minContainer.insertAdjacentHTML("beforeend","<button id="+minus+" value='minus'> - </button>");
        minContainer.insertAdjacentHTML("beforeend","<button id="+plus+" value='plus'> + </button>");

    };

};


//låter användaren lägga till en ny spelare i listan

addPlayerBtn.addEventListener("click", function(){

    let nySpelare = {
        name : addPlayer.value,
        points : 0
    }
    allPlayers.push(nySpelare);

    //console.log(allPlayers);

    apendPlayers();
});


minContainer.addEventListener("click", function(event){
    
    let target = event.target

    let targetValue = target.value;

    let targetId = target.id;

    console.log(target);

    console.log(targetValue);

    console.log(targetId);

    if (targetValue == "plus") {
        


        console.log("du tryckte på plus");
    };

    if (targetValue == "minus") {
        console.log("du tryckte på minus");
    }


});

apendPlayers ();