const params = new URLSearchParams(window.location.search);

document.querySelector("#results").innerHTML = `
  <p>Name: ${params.get("name")}</p>
  <p>Email: ${params.get("email")}</p>
  <p>Age: ${params.get("age")}</p>
`;