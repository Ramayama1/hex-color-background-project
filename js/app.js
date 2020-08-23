const random_hex_color_code = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};

function changeColor() {
  let num = random_hex_color_code();
  document.querySelector("#hex-value").innerHTML = num;
  document.body.style.backgroundColor = num;
}

let button = document.querySelector("#btn");
button.addEventListener("click", changeColor);
