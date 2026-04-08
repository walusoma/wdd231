async function loadPlayers() {
  try {
    const response = await fetch("data/players.json");

    if (!response.ok) {
      throw new Error("Failed to load players");
    }

    const players = await response.json();
    const container = document.querySelector("#players");

    players.forEach(player => {
      const card = document.createElement("div");

      card.innerHTML = `
        <h3>${player.name}</h3>
        <p>Age: ${player.age}</p>
        <p>Position: ${player.position}</p>
        <p>Goals: ${player.goals}</p>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.error("Error loading players:", error);
  }
}

loadPlayers();