// document.getElementById("result").value="65-1+62+16+26/9";
// var count=0;
// document.getElementById("btn").addEventListener("click",() => {
//    // document.getElementById("result").value +=" clicked! ";
//    //document.getElementById("result").value +=count;
//    document.getElementById("result").value = eval(document.getElementById("result").value );//"";//document.getElementById("result").value.slice(0,-1);
// });
document.getElementById("result").value ="";

function clearResult() {
    alert("Clearing Result!")
    document.getElementById("result").value = "";
}
function deleteLast(){
    let result =document.getElementById("result");
    result.value =result.value.slice(0, -1);
}

function  calculateResult(){
    let result =document.getElementById("result");
    result.value =eval(result.value);

}
function appendToResult(val){
    let result =document.getElementById("result");
    result.value += val;
}
