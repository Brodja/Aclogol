var i = 0;
var a = [0, 0, 0, 6];
var start = document.getElementById("start");
var go = 0;

function startF() {
  var wrt = JSON.parse(localStorage.getItem("wrt") || "[]");


  if (go != 1) {
    for (let i = 0; i < wrt.length; i++) {
      render(wrt[i]);
    }
    go = 1;
  }else{
    wrt.push(test_input.value);
    localStorage.setItem("wrt", JSON.stringify(wrt));
    render(wrt[wrt.length - 1]);
  
    i++;
    test_input.value = "";
  }
}
startF();

function render(b) {
  var add = document.createElement("div");
  add.innerText = b;
  start.appendChild(add);
}
