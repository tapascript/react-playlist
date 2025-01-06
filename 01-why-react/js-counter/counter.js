function createCounter(container) {
  const counterDiv = document.createElement("div");
  counterDiv.className = "counter";

  let count = 0;

  const countDisplay = document.createElement("span");
  countDisplay.textContent = count;

  const incrementButton = document.createElement("button");
  incrementButton.textContent = "Increment";
  incrementButton.addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
  });

  const decrementButton = document.createElement("button");
  decrementButton.textContent = "Decrement";
  decrementButton.addEventListener("click", () => {
    count--;
    countDisplay.textContent = count;
  });

  counterDiv.appendChild(decrementButton);
  counterDiv.appendChild(countDisplay);
  counterDiv.appendChild(incrementButton);

  container.appendChild(counterDiv);
}

// Create multiple counters
const countersContainer = document.getElementById("counters");
for (let i = 0; i < 5; i++) {
  createCounter(countersContainer);
}
