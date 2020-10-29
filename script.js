var i = 0;
var a = [0, 0, 0, 6];
var start = document.getElementById("start");
var go = 0;
console.log(localStorage.getItem("wrt") + " kjr");
// console.log(wrt)

function startF() {
  var wrt = JSON.parse(localStorage.getItem("wrt") || "[]");



  // wrt.push(test_input.value);
  // a.push(test_input.value);
  //`localStorage.setItem("wrt", JSON.stringify(a));

  // render(wrt[wrt.length - 1]);

  // i++;
  // test_input.value = "";

  if (go != 1) {
    for (let i = 0; i < wrt.length; i++) {
      render(wrt[i]);
    }
    go = 1;
  }else{
    wrt.push(test_input.value);
    a.push(test_input.value);
    localStorage.setItem("wrt", JSON.stringify(a));
  
    render(wrt[wrt.length - 1]);
  
    i++;
    test_input.value = "";
  }
}
startF();

function render(b) {
  // console.log(b + 'bbbbbbbbbbbbbbbbbbbbbbbbb')
  var add = document.createElement("div");
  add.innerText = b;
  start.appendChild(add);
  // arr = JSON.parse(localStorage.getItem("key") || "[]");
  // console.log(arr)
}
