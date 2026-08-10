massages = [
    "Ohh, HI",
    "for the record, You won't learn anything :]",
    "trust me, bro",
    "Are you sure??",
    "alright then, you wanted this",
    "(╯°□°）╯︵ ┻━┻"
];

let massageIdx = 0;
let TimeoutId = 0;
let resetTimeOut = 0;
let btn = undefined;

document.addEventListener("DOMContentLoaded", (e) => {
    btn = document.getElementById("hero-btn");
});

function ChangeBtnSaying(){
    btn.value = massages[massageIdx];
    massageIdx = (massageIdx + 1) % massages.length;
    
    clearTimeout(TimeoutId);
    clearTimeout(resetTimeOut);

    TimeoutId = setTimeout(() => {
        btn.value = "Start learning";
    }, 2000);

    resetTimeOut = setTimeout(() => {
        massageIdx = 0;
    }, 5000);
}