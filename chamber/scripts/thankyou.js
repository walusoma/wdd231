const params = new URLSearchParams(window.location.search);

document.getElementById("results").innerHTML = `
<p>Name: ${params.get("fname")} ${params.get("lname")}</p>
<p>Email: ${params.get("email")}</p>
<p>Phone: ${params.get("phone")}</p>
<p>Business: ${params.get("business")}</p>
<p>Date: ${params.get("timestamp")}</p>
`;