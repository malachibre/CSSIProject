const newInput = () => {
  var it = document.createElement("INPUT");
  var br = document.createElement("br");
  // <!--- something like this --->
  // document.body.removeElement(button);
  // <!--- -->
  it.setAttribute("type", "number");
  document.body.appendChild(br);
  document.body.appendChild(it);
  // <!--- something like -->
  // // var button2 = document.createElement('<button id="textnum" onclick="newInput">Add CRN</button>');
  // // document.body.appendChild(button2);
  // <!--- -->
}
// window.onload=function(){
//   document.getElementById("button").style.display='none';
//
// }


button = document.querySelector("#addCRN");
button.addEventListener("click", () => {
  setMapOnAll(null);
});
