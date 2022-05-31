const img1 = document.querySelectorAll(".img1");
const img2 = document.querySelectorAll(".img2");
const result = document.getElementById("result");

let pixel = 100;

function start() {
  for (let i = 0; i < img2.length; i++) {
    img1[i].style.transform = `translateX(${pixel}px)`;
    img2[i].style.transform = `translateX(${-pixel}px)`;
  }
  pixel += 100;
  result.innerHTML = -100 + pixel + " px";
}

function reset() {
  for (let j = 0; j < img1.length; j++) {
    img1[j].style.transform = "translateX(0px)";
    img2[j].style.transform = "translateX(0px)";
    
    pixel = 0;
    result.innerHTML = pixel + " px";
  }
}
