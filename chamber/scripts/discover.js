const message = document.querySelector("#visit-message");

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  message.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

  if (days < 1) {
    message.textContent = "Back so soon! Awesome!";
  } else if (days === 1) {
    message.textContent = "You last visited 1 day ago.";
  } else {
    message.textContent = `You last visited ${days} days ago.`;
  }
}

localStorage.setItem("lastVisit", now);

fetch("data/discover.json")
  .then(res => res.json())
  .then(places => {
    const grid = document.querySelector("#discover-grid");

    places.forEach(place => {
      const card = document.createElement("div");
      card.classList.add("discover-card");

      card.innerHTML = `
        <h2>${place.name}</h2>

        <figure>
          <img src="${place.image}" alt="${place.name}" loading="lazy">
        </figure>

        <address>${place.address}</address>

        <p>${place.description}</p>

        <button>Learn More</button>
      `;

      grid.appendChild(card);
    });
  });