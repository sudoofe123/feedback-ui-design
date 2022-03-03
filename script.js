"use strict";

const container = document.querySelector(".container");
const emogiBox = document.querySelector(".emogi-box");
const sendBtn = document.getElementById("send");
const emogiContainer = document.querySelector(".emogi-container");
let selectedRating = "satisfied";

// container.addEventListener("click", function(e) {
// console.log("clixc");

emogiContainer.addEventListener("click", function(e) {
    if (e.target.parentNode.classList.contains("emogi-box")) {
        // console.log(e.target);
        removeActive();
        e.target.parentNode.classList.add("active");

        // selectedRating = e.target.nextElementSibling.innerHTML;
        // console.log(selectedRating);
    }
});

function removeActive() {
    for (let i = 0; i < emogiBox.length; i++) {
        emogiBox[i].classList.remove("active");
    }
}

sendBtn.addEventListener("click", (e) => {
    container.innerHTML = `
    <i class="fas fa-heart "></i>
    <strong>Thank you</strong>
    <br>
    <strong> feedback: ${selectedRating} </strong>
    <p>  we will use your Feedback to improve customer support </p>
    `;
});