const container = document.querySelector(".container");
const btnReset = document.getElementById("resetButton");

const arrayBox = [];

//Ciclo per generare i box
for (let i = 0 ; i < 100 ; i++) {

  const singleBox = generateBox();
  //Ad ogni box generato assegno una custom properties che corrisponde al suo numero in tabella. il + 1 serve perchè l'indice parte da 0, mentre a me serve che la prima casella abbia i = 0 e l'ultima i=100
  singleBox.zzIdBox = i + 1

  singleBox.addEventListener("click", function(){
    this.classList.toggle("active")
    console.log(this.zzIdBox)
    singleBox.innerHTML = `${this.zzIdBox}`
  })
  container.appendChild(singleBox)
  arrayBox.push(singleBox)

}



// ================== FUNZIONI  ==================
function generateBox() {

  const newBox = document.createElement("div");

  newBox.classList.add("box")

  return newBox;
}
