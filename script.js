const code = [""];
let num = Math.floor(Math.random() * 10);
for (let i = 0; i < 5; i++) {
    while (code.includes(num)) {
        num = Math.floor(Math.random() * 10);
    }
    code[i] = num;
}
console.log("generated code:", code);
let attempts = 0;

function reSet() {
    //To generate a new code and restart the game
    console.clear();
    attempts = 0;
    let num = Math.floor(Math.random() * 10);
    for (let i = 0; i < 5; i++) {
        while (code.includes(num)) {
            num = Math.floor(Math.random() * 10);
        }
        code[i] = num;
    }
    console.log("generated code:", code);
    const boxes = document.querySelectorAll(".box");
    for (box of boxes) {
        box.value = " ";
        box.style.backgroundColor = "white";
        box.readOnly = false;
    }
    for (let i = 0; i < 5; i++) {
        document.getElementById("button" + i).disabled = false;
    }
}

function check(row) {
    attempts++;
    const input = [""];
    let yellow = 0;
    let green = 0;
    document.getElementById("button" + row).disabled = true;
    for (i = 0; i < 5; i++) {
        input[i] = +document.getElementById("box" + row + i).value;
        document.getElementById("box" + row + i).readOnly = true;
        document.getElementById("box" + row + i).style.backgroundColor = "rgb(250, 100, 100)";
        if (code.includes(input[i])) {
            document.getElementById("box" + row + i).style.backgroundColor = "rgb(255, 206, 88)";
            yellow++;
        }
        if (code[i] === input[i]) {
            document.getElementById("box" + row + i).style.backgroundColor = "rgb(50, 200, 120)";
            green++;
        }
    }
    if (green === 5) {
        alert("Congratulations!\nYou Won!");
        for (let row = 0; row < 5; row++) {
            for (let i = 0; i < 5; i++) {
                document.getElementById("box" + row + i).readOnly = true;
            }
            document.getElementById("button" + row).disabled = true;
        }
    } else if (attempts === 5) {
        alert("You Lost!\ncode: " + code + "\nTry Again!");
    }
}