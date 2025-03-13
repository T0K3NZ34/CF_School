let mousePosition = document.getElementById("mousePosition");
let circle = document.getElementById("circle");
//only add the "#" or the "." on the get element by when you use the query!!!

circle.addEventListener('mouseover', () => {
    mousePosition.innerHTML = "You are in the circle" ;
});

circle.addEventListener("mouseleave", () =>{
    mousePosition.innerHTML = "You are outide of the circle"
});

circle.addEventListener("click", ()=>{

    circle.style.backgroundColor = "grey";
});

circle.addEventListener("dblclick", ()=>{
    circle.style.backgroundColor = "blue";
});