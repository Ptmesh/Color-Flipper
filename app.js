const colors = [
    "green",
    "orange",
    "red",
    "blue",
    "yellow",
    "purple",
    "cyan",
    "teal",
    "lime",
    "indigo",
    "brown",
    "pink",
    "magenta",
    "violet",
    "coral",
    "gold",
    "aqua",
    "silver",
    "crimson",
    "lightgreen",
    "navy",
    "darkorange",
    "darkred",
    "deeppink",
    "lightblue",
    "mediumorchid",
    "skyblue",
    "tomato",
    "chartreuse",
    "darkseagreen",
    "orchid",
    "peru",
    "saddlebrown",
    "seashell",
    "wheat",
    "mediumvioletred",
    "dodgerblue",
    "cadetblue",
    "slateblue",
    "darkslateblue",
    "midnightblue",
    "maroon",
    "olive",
    "salmon",
    "sienna",
    "steelblue",
    "tan",
    "thistle",
    "yellowgreen",
  ];


const btn = document.getElementById('btn');
const color=document.querySelector('.color');

btn.addEventListener('click',()=>{
    const randomNumForColor=getRandNum();
    document.body.style.backgroundColor=colors[randomNumForColor];
    color.textContent=colors[randomNumForColor];
})

function getRandNum()
{
    return Math.floor(Math.random()*colors.length);
}