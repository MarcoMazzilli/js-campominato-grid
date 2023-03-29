const container = document.querySelector(".container");

//Ciclo per generare i box
for (let i = 0 ; i < 100 ; i++) {

  const singleBox = generateBox();

  singleBox.addEventListener("click", function(){
    this.classList.toggle("active")
    console.log(this)
  })
  container.appendChild(singleBox)

}



// ================== FUNZIONI  ==================
function generateBox() {

  const newBox = document.createElement("div");

  newBox.classList.add("box")

  return newBox;
}

