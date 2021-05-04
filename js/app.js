let ip_access = "041c64f12d45c32b32d4a4861c5b92f6";

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    city = position.coords.geolocation;

    document.getElementById("latitude").textContent = lat;
    document.getElementById("longitude").textContent = lon;

    const mymap = L.map("mymap").setView([lat, lon], 15);
    const attribution =
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const tiles = L.tileLayer(tileUrl, { attribution });
    tiles.addTo(mymap);
    const marker = L.marker([lat, lon]).addTo(mymap);
  });
} else {
  console.log("geolocation not available");
}

let url = `https://api.ipstack.com/check?access_key=${ip_access}`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.getElementById("city").textContent = data.city;
    document.getElementById("ip").textContent = data.ip;
    document.getElementById("region_name").textContent = data.region_name;
    document.getElementById("zip").textContent = data.zip;
    document.getElementById("country_name").textContent = data.country_name;
    document.getElementById("type").textContent = data.type;
  });
