let currentStep = 1;
let userName = "";
let selectedDomains = [];
let score = 0;

// Handle form submission
document.getElementById("detailsForm").addEventListener("submit", function(e) {
  e.preventDefault();
  userName = document.getElementById("name").value;
  goToStep(2);
});

function goToStep(step) {
  document.querySelectorAll(".step").forEach(s => s.classList.add("hidden"));
  const target = document.getElementById("step" + step);
  target.classList.remove("hidden");
  target.classList.add("active");
  document.getElementById("progress-bar").style.width = (step * 25) + "%";
}

function goToQuiz() {
  selectedDomains = Array.from(document.querySelectorAll("#step2 input:checked")).map(i => i.value);
  if (selectedDomains.length === 0) {
    alert("Please select at least one domain!");
    return;
  }
  loadQuiz(selectedDomains[0]); // load quiz for first domain
  goToStep(3);
}

function submitQuiz() {
  score = calculateScore();
  goToStep(4);
  document.getElementById("resultText").innerText =
    `${userName}, you applied for ${selectedDomains.join(", ")}.\nYour score: ${score}/5`;
}

// Dark/Light Mode Toggle
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "Toggle Theme";
toggleBtn.className = "toggle-theme";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});