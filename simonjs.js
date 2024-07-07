let gameseq = [];
let userseq = [];
let started = false;
let level = 0;

let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector("h2");


document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game satrted");
        started = true;

        levelUp();
    }
});

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 500);
}

function levelUp() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randidx = Math.floor(Math.random() * 4);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);

    // console.log(randidx);
    // console.log(randcolor);
    // console.log(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
}

function checkans(idx) {
    // console.log("curr level : ",level);
    if (userseq[idx] == gameseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else {
        h2.innerText = `Game Over! Press any key to start. `;
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 1000)
        reset();
    }
}

function btnpress() {
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);

}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 500);
}


function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
    h2.innerText = "Press any key to start."; // Reset h2 text
    document.querySelector("body").style.backgroundColor = "white"; // Reset background color
}
