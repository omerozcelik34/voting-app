//*veriables
const cardMain = document.querySelector(".card-main");
const cardEnd = document.querySelector(".card-end");
const numbers = document.querySelector("#numbers");
const button = document.querySelector("#button");
const choiceText = document.querySelector(".choice-text");

const select = () => {
    for (let i = 0; i < numbers.children.length; i++) {
        numbers.children[i].addEventListener("click", () => {
            for (let number of numbers.children) {
                number.classList.remove("selected");
            }
            numbers.children[i].classList.add("selected");
        })
    }
}

select();

button.addEventListener("click", () => {
    cardMain.classList.add("disabled");
    cardEnd.classList.remove("disabled");
    infoShow();
})

const infoShow = () => {
    for (let i = 0; i < numbers.children.length; i++) {
        if (numbers.children[i].classList.contains("selected")) {
            choiceText.innerHTML = `5 üzerinden ${numbers.children[i].id} oyladınız.`;
        }
    }
}
