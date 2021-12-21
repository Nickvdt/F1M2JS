const myTitle = document.getElementById('myTitle');
const myImage = document.getElementById('myImage');

let seizoenen = [
    {
        "titel":"seizoenen",
        "image":"img/seasons.jpg",
        "backGround":"orange"
    },
    {
        "titel":"lente",
        "image":"img/spring.jpg",
        "backgGround":"green"
    },
    {
        "titel":"zomer",
        "image":"img/summer.jpg",
        "backgGround":"yellow"
    },
    {
        "titel":"herfst",
        "image":"img/autumn.jpg",
        "backgGround":"brown"
    },
    {
        "titel":"winter",
        "image":"img/winter.jpg",
        "backgGround":"white"
    } 
];



function show(index){
    myTitle.innerHTML = seizoenen[index].titel;
    myImage.src = seizoenen[index].image;
    document.body.style.backgroundColor = seizoenen[index].backGround;
}
