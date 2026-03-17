const spotlightContainer = document.querySelector("#spotlights");

async function getSpotlights() {
  const response = await fetch("data/members.json");
  const data = await response.json();

  const filtered = data.filter(m => m.membership >= 2);

  const random = filtered.sort(() => 0.5 - Math.random()).slice(0, 3);

  random.forEach(member => {
    const card = document.createElement("div");

    card.innerHTML = `
      <h3>${member.name}</h3>
      <img src="images/${member.image}" alt="${member.name}">
      <p>${member.phone}</p>
      <p>${member.address}</p>
      <a href="${member.website}" target="_blank">Visit</a>
      <p>Level: ${member.membership}</p>
    `;

    spotlightContainer.appendChild(card);
  });
}

getSpotlights();