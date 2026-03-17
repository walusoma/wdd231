const apiKey = "2d856127f6f5423a216583b31d3b3099";
const city = "Buwenge,UG";

async function getWeather() {
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`);
    const data = await res.json();

    const current = data.list[0];

    document.querySelector("#temp").textContent =
      `Temperature: ${current.main.temp}°C`;

    document.querySelector("#desc").textContent =
      `Condition: ${current.weather[0].description}`;

    const forecastContainer = document.querySelector("#forecast");
    forecastContainer.innerHTML = "";

    for (let i = 0; i < 3; i++) {
      const day = data.list[i * 8];
      forecastContainer.innerHTML += `
        <p>${day.dt_txt.split(" ")[0]}: ${day.main.temp}°C</p>
      `;
    }

  } catch (err) {
    console.error("Weather data error:", err);
  }
}

getWeather();