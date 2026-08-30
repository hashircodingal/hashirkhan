const student = {
  name: "Riya",
  age: 12,
  grade: 7,
  hobbies: "Drawing",
  favSport: "Cricket"
};

const colors = ["white", "black", "red", "green", "blue"];

const studentFields = {
  "student-name": student.name,
  "student-age": `${student.age} years`,
  "student-grade": `Grade ${student.grade}`,
  "student-hobby": student.hobbies,
  "student-sport": student.favSport
};

Object.entries(studentFields).forEach(([id, value]) => {
  document.getElementById(id).textContent = value;
});

function displayColors(elementId, colorArray) {
  const container = document.getElementById(elementId);

  colorArray.forEach((color) => {
    const item = document.createElement("span");
    item.className = "color-item";
    item.style.backgroundColor = color === "white" ? "#64748b" : color;
    item.innerHTML = `<span class="color-dot"></span>${color}`;
    container.appendChild(item);
  });
}

displayColors("before-colors", colors);

const favoriteColor = colors[3];
const favoriteElement = document.getElementById("favorite-color");
favoriteElement.innerHTML = `
  <span class="color-dot"></span>
  ${favoriteColor}
`;

colors.pop();
displayColors("after-colors", colors);