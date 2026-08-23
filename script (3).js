let numbers = "";

for (let i = 1; i <= 10; i++) {
  numbers += `${i}<br>`;
}

document.getElementById("numbers").innerHTML = numbers;

const randomValue = Math.floor(Math.random() * 100);
document.getElementById("randomValue").textContent =
  `The random value is ${randomValue}`;

const date = new Date();
document.getElementById("date").textContent =
  `Today's date is ${date.toLocaleDateString()}`;