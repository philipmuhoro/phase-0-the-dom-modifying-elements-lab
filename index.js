const mainElement = document.getElementById("main");
if (mainElement) {
    mainElement.parentNode.removeChild(mainElement);
  }
  
const newHeader = document.createElement("h1");
newHeader.id="victory";
newHeader.textContent= "Philip is the champion"

