const url = "data/members.json";
const container = document.querySelector("#members");

async function getMembers() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data);
  } catch (error) {
    console.error("Error loading members:", error);
  }
}

function displayMembers(members) {
  container.innerHTML = "";

  members.forEach(member => {

    const card = document.createElement("div");
    card.classList.add("member-card");

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank" rel="noopener">Visit Website</a>
      <p>Membership Level: ${member.membership}</p>
    `;

    container.appendChild(card);

  });
}

document.querySelector("#grid").addEventListener("click", () => {
  container.classList.add("grid");
  container.classList.remove("list");
});

document.querySelector("#list").addEventListener("click", () => {
  container.classList.add("list");
  container.classList.remove("grid");
});

getMembers();