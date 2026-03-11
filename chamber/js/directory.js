const url = "data/members.json";

const container = document.querySelector("#members");

async function getMembers(){

const response = await fetch(url);

const data = await response.json();

displayMembers(data);

}

getMembers();

function displayMembers(members){

container.innerHTML="";

members.forEach(member => {

const card = document.createElement("section");

card.innerHTML = `
<img src="images/${member.image}" alt="${member.name}">
<h3>${member.name}</h3>
<p>${member.address}</p>
<p>${member.phone}</p>
<a href="${member.website}" target="_blank">Visit Website</a>
`;

container.appendChild(card);

});

}

document.querySelector("#grid").addEventListener("click", ()=>{

container.classList.add("grid");
container.classList.remove("list");

});

document.querySelector("#list").addEventListener("click", ()=>{

container.classList.add("list");
container.classList.remove("grid");

});

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent = document.lastModified;