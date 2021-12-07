const myImage = document.getElementById('myImage');
const myTitle = document.getElementById('myTitle');
const myTekst = document.getElementById('myTekst');

let paintings = [
    "img/painting0.jpg",
    "img/painting1.jpg",
    "img/painting2.jpg",
    "img/painting3.jpg",
    "img/painting4.jpg",
    "img/painting5.jpg"
];

let titels = [
    "De Schilderijen van van Gogh",
    "De rode wijngaard",
    "De sterrennacht",
    "Sterrennacht boven de Rh�ne",
    "Zonnebloemen",
    "Boerderij in de Provence"
];


let tekst = [
    "Hier komt de informatie over de afbeelding",
    "november 1888 Pesjkinmuseum Moskouw",
    "juni 1889 Museum of Modern Art New York",
    "september 1888 Musée d'Orsay  Parijs",
    "januari 1889 Neue Pinakothek Munchen",
    "september 1888 National Gallery of Art Washington D.C."
];



function changeImage(index){
    myTitle.innerHTML = titels[index];
    myImage.src = paintings[index];
    myTekst.innerHTML = tekst[index];
}
