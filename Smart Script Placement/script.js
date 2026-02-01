const button = document.getElementById("btn");
const paragraph = document.getElementById("text");

button.addEventListener("click", () => {
  paragraph.style.display = "block";
  paragraph.textContent = "JavaScript is running!";
  button.textContent = "Done!";
});