const input = document.querySelector("input");
const button = document.querySelector("button");

const place = document.querySelector("#place");
const degress = document.querySelector("#degress");
const img = document.querySelector("img");
const wind = document.querySelector("#wind");
const content = document.querySelector(".content");
const time = document.querySelector("#time");

const api_key = "264ea4e8250c55662db59bd1cfaf1022";

button.addEventListener("click", () => {
    if (!input.value) return;

    getDataApi();
})

async function getDataApi() {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
        input.value
    )}&units=metric&appid=${api_key}`;

    try {
        await fetch(url).then((res) => res.json()).then((data) => {
            if (data?.cod && data.cod === "404") {
                return alert("Local não Encontrado!");
            }

            loadData(data);
        });
    } catch (error) {
        alert(error);
    }
}

function loadData(data) {
    console.log(data);
    console.log(new Date(data.dt * 1000));
    let date = new Date(data.dt * 1000);

    let timestr = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

    place.innerHTML = `${data.name}, ${data.sys.country}`;
    degress.innerHTML = `Temperatura: ${Math.floor(data.main.temp)}° C`;
    img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    wind.innerHTML = `Vento: ${data.wind.speed} km/h`;
    time.innerHTML = `Data ${timestr}`;
    content.style.display = "flex";
}