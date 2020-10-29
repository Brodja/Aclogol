// var myNode = document.getElementById("foo");
var alcogolics = [];
var operations = [];
var operetionID = 0;

function createAclogolic() {
    if(new_name_alcogolic.value == '' ){
        alert('Enter name!!!')
        return false;
    }else{
        let obj = {
            id: alcogolics.length,
            name: new_name_alcogolic.value,
            sumP: 0,
            sumM: 0,
          };
          new_name_alcogolic.value = "";
          alcogolics.push(obj);
          calc();
    }
}

function createOperate() {
    let arr = enter_idO.value.split(',');
 

    if(enter_id.value == '' || enter_id.value >= alcogolics.length){
        alert('Enter info or Err ID!!')
        return false;
    }else if(Math.max(...arr) >= alcogolics.length){
        alert('Enter Err ID!!')
        return false;
    }
    else{
        let obj = {
            id: enter_id.value,
            name: enter_name.value,
            sumP: enter_sumP.value,
            sumM: enter_sumM.value,
            sobutilnics: enter_idO.value,
          };
          enter_id.value = "";
          enter_name.value = "";
          enter_sumP.value = "";
          enter_sumM.value = "";
          enter_idO.value = "";

          operations.push(obj);
          calculator()
          operetionID++;
    }
}

function calculatorPM(){
    let res = alcogolics.find( alcogolic => alcogolic.id === +operations[operetionID].id)
    res.sumP += +operations[operetionID].sumP
    res.sumM -= +operations[operetionID].sumM
    calc()
}

function calculatorId(){
    let arr = operations[operetionID].sobutilnics.split(',');
    let sum = +operations[operetionID].sumP / arr.length;
    let res = alcogolics.find( alcogolic => alcogolic.id === +operations[operetionID].id)
    res.sumP += +operations[operetionID].sumP

    for(let i = 0; i<arr.length; i++){
        console.log(arr)
        let res = alcogolics.find( alcogolic => alcogolic.id === +arr[i])
        res.sumM -= sum
    }    
    calc()


}

function calculator(){

    if(operations[operetionID].sobutilnics == ''){
        calculatorPM();
    }else{
        calculatorId();
    }

}

function createAclogolicList(obj) {
  let box = document.createElement("div");
  box.className = "result_one_aclogolic";

  let id = document.createElement("div");
  id.className = "id_box";
  id.innerText = obj.id;

  let name = document.createElement("div");
  name.className = "name_box";
  name.innerText =  obj.name;

  let sumPlus = document.createElement("div");
  sumPlus.className = "name_box";
  sumPlus.innerText = obj.sumP;

  let sumMinus = document.createElement("div");
  sumMinus.className = "name_box";
  sumMinus.innerText = obj.sumM;

  box.appendChild(id);
  box.appendChild(name);
  box.appendChild(sumPlus);
  box.appendChild(sumMinus);
  root.appendChild(box);
}

function renderAlcogoliks(arr){
    for(let i = 0; i<arr.length;i++){
        
        createAclogolicList(arr[i])
    }
}
function calc(){  
while (root.firstChild) {
    root.removeChild(root.firstChild);
}
    renderAlcogoliks(alcogolics)
}
