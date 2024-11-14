document.addEventListener("DOMContentLoaded", () => {
  const promptEl = document.getElementById("prompt");
  const inputArea = document.getElementById("input-area");
  const completionMessage = document.getElementById("completion-message");
  const refreshButton = document.getElementById("refresh");
  const nextButton = document.getElementById("next");
  const wpmEl = document.getElementById("wpm");
  const accuracyEl = document.getElementById("accuracy-value");

  let currentPrompt = "";
  let startTime = null;
  let errorCount = 0; // Total mistakes made
  let charactersTyped = 0; // Tracks total characters typed

  const prompts = [
    "The quick brown fox jumps over the lazy dog.",
    "Typing is fun and improves your speed.",
    "Accuracy and consistency are key.",
    "Test your skills with this challenge."
  ];

  const loadPrompt = () => {
    currentPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    promptEl.innerHTML = currentPrompt
      .split("")
      .map((char) => `<span>${char}</span>`)
      .join("");
    inputArea.value = "";
    completionMessage.hidden = true;
    inputArea.disabled = false;
    startTime = null;
    errorCount = 0;
    charactersTyped = 0;
    updateStats(0, 100);
  };

  const calculateWPM = (elapsedTime) => {
    const wordsTyped = currentPrompt.length / 5;
    return Math.max(0, Math.floor(wordsTyped / elapsedTime));
  };

  const calculateAccuracy = () => {
    const correctChars = charactersTyped - errorCount;
    return Math.max(0, Math.floor((correctChars / charactersTyped) * 100));
  };

  const updateStats = (wpm, accuracy) => {
    wpmEl.textContent = wpm;
    accuracyEl.textContent = `${accuracy}%`;
  };

  inputArea.addEventListener("input", () => {
    if (!startTime) startTime = new Date();

    const userInput = inputArea.value;
    const spans = promptEl.querySelectorAll("span");
    let localErrors = 0;

    spans.forEach((span, index) => {
      const char = userInput[index];

      if (char == null) {
        span.classList.remove("correct", "incorrect");
      } else if (char === span.textContent) {
        span.classList.add("correct");
        span.classList.remove("incorrect");
      } else {
        span.classList.add("incorrect");
        span.classList.remove("correct");
        localErrors++;
      }
    });

    errorCount += localErrors;
    charactersTyped = userInput.length;

    const elapsedTime = (new Date() - startTime) / 1000 / 60; // Time in minutes
    const wpm = calculateWPM(elapsedTime);
    const accuracy = calculateAccuracy();

    updateStats(wpm, accuracy);

    if (userInput.length === currentPrompt.length) {
      completionMessage.hidden = false;
      inputArea.disabled = true;
    }
  });

  refreshButton.addEventListener("click", loadPrompt);
  nextButton.addEventListener("click", loadPrompt);

  loadPrompt();
});














