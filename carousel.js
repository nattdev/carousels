let animationUno = document.querySelector(".container-img:nth-child(1)");

animationUno.addEventListener("animationiteration", () => {
  console.log("Iteracion");
  animationUno.style.right = "-100.2vw";
  animationUno.style.animationName = "carruselDos";
    animationUno.style.animationDuration = "12s";
  });

let animationDos = document.querySelector(".container-img:nth-child(2)");

animationDos.addEventListener("animationiteration", () => {
  console.log("IteracionDos");
  animationDos.style.right = "-50vw";
  animationDos.style.animationName = "carruselDos";
    animationDos.style.animationDuration = "12s";
  });