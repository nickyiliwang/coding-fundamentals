var domainroot = "google.com"

function Gsitesearch(curobj) {
    curobj.q.value = "site:" + domainroot + " " + curobj.qfront.value
}

var truthButton = document.querySelector("#truth");
var liesTxt = document.querySelector("#lies");
var isTheButtonRed = false;

var vote1 = document.querySelector("#vote1");
var vote2 = document.querySelector("#vote2");
var vote3 = document.querySelector("#vote3");
var vote4 = document.querySelector("#vote4");

var getresult1 = document.querySelector("#result1");
var getresult2 = document.querySelector("#result2");
var getresult3 = document.querySelector("#result3");
var getresult4 = document.querySelector("#result4");

var voteCount1 = 0;
var voteCount2 = 0;
var voteCount3 = 0;
var voteCount4 = 0;

//This function Toggles Blue and Red Colors for Buttons
truthButton.addEventListener("click", () => {
    if (isTheButtonRed === false) {
        liesTxt.innerText = "Is the most frustrating unfulfilled POS of all time!";
        truthButton.style.background = "red";
        isTheButtonRed = true;

    } else if (isTheButtonRed === true) {
        liesTxt.innerText = "Is the best Game Ever!";
        truthButton.style.background = "blue";
        isTheButtonRed = false;
    }
});

//This function Increments the number of votes on one voting section
vote1.addEventListener("click", () => {
    voteCount1++;
    getresult1.textContent = voteCount1;
});
vote2.addEventListener("click", () => {
    voteCount2++;
    getresult2.textContent = voteCount2;
});
vote3.addEventListener("click", () => {
    voteCount3++;
    getresult3.textContent = voteCount3;
});
vote4.addEventListener("click", () => {
    voteCount4++;
    getresult4.textContent = voteCount4;
});