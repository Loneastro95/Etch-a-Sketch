const container = document.querySelector(".container");
const clear = document.querySelector("#clear-btn");


for (i=1; i<=256; i++) {
  const gridBocks = document.createElement("div");
  gridBocks.classList.add("gridBlock");
  container.appendChild(gridBocks);  
}

const hoverDivs = [...document.querySelectorAll('.gridBlock')];

let colorChange = false;

hoverDivs.forEach(hoverDiv => {
    hoverDiv.addEventListener('mousedown', () => {
        colorChange = true;
    });

    hoverDiv.addEventListener('mouseup', () =>{
        colorChange = false;
    })
    hoverDiv.addEventListener('mouseover', () => {
        if(colorChange){
          hoverDiv.style.backgroundColor = "black";
        }
      });
      

})
    function clearDiv() {
     hoverDivs.childNodes.forEach((child) =>
      child.style.backgroundColor = "white"
    )
  }