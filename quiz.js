const quizzes = {
  "Core": [
    {q: "What does a qubit represent?", options: ["0/1", "Superposition", "Classical bit"], answer: 1},
    {q: "Which algorithm is famous in quantum search?", options: ["Dijkstra", "Grover", "Bellman-Ford"], answer: 1},
    {q: "Quantum entanglement refers to?", options: ["Independent states", "Correlated states", "Random states"], answer: 1},
    {q: "Which company developed Qiskit?", options: ["Google", "IBM", "Microsoft"], answer: 1},
    {q: "Quantum computers are expected to outperform classical ones in?", options: ["Sorting", "Factorization", "Text editing"], answer: 1}
  ],

  "Web Development": [
    {q: "Which language runs in the browser?", options: ["Python", "JavaScript", "C++"], answer: 1},
    {q: "CSS is used for?", options: ["Logic", "Styling", "Database"], answer: 1},
    {q: "HTML stands for?", options: ["HyperText Markup Language", "HighText Machine Language", "HyperTool Multi Language"], answer: 0},
    {q: "Which of the following best describes responsive web design?", options: ["Websites that adjust layout across devices", "Websites that respond only to user clicks", "Websites built only with JavaScript"], answer: 0},
    {q: "Which HTTP status code means 'Not Found'?", options: ["200", "404", "500"], answer: 1}
  ],

  "Design": [
    {q: "Which tool is popular for UI design?", options: ["Photoshop", "Figma", "Excel"], answer: 1},
    {q: "Which principle focuses on spacing?", options: ["Contrast", "Alignment", "White Space"], answer: 2},
    {q: "Which color model is used for digital screens?", options: ["CMYK", "RGB", "Pantone"], answer: 1},
    {q: "Typography deals with?", options: ["Fonts & text style", "Image resolution", "Page margins"], answer: 0},
    {q: "Which design principle ensures balance?", options: ["Symmetry", "Hierarchy", "Noise"], answer: 0}
  ]
};

function loadQuiz(domain) {
  const quizContainer = document.getElementById("quiz");
  quizContainer.innerHTML = "";
  quizzes[domain].forEach((item, i) => {
    quizContainer.innerHTML += `
      <p>${i+1}. ${item.q}</p>
      ${item.options.map((opt, idx) =>
        `<label><input type="radio" name="q${i}" value="${idx}"> ${opt}</label><br>`
      ).join("")}
    `;
  });
}

function calculateScore() {
  let domain = selectedDomains[0];
  let quiz = quizzes[domain];
  let score = 0;
  quiz.forEach((item, i) => {
    let selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && parseInt(selected.value) === item.answer) score++;
  });
  return score;
}