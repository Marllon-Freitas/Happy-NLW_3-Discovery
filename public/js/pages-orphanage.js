//deixando o mapa fixo
const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}

//adicionando o mapa
const map = L.map("mapid", options).setView([-6.6040899, -39.064953], 15); //Cria o mapa

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})
.addTo(map); //Cria e adiciona o TileLayer

//Cria o icone
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})


L.marker([-6.6040899, -39.064953], { icon }).addTo(map);

//galeria de imagens
function selectImage(event) {
  const button = event.currentTarget

  console.log(button.children)

  const buttons = document.querySelectorAll(".images button")
  buttons.forEach(removeActiveClass)

  function removeActiveClass(button) {
      button.classList.remove("active")
  }

  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")

  imageContainer.src = image.src

  button.classList.add('active')

}