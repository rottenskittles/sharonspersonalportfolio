var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 4000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

function toggleVis(elementID){
  document.getElementById(elementID).classList.toggle("hidden");
}
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByClassName("nextBtn");
  for (button of buttons) {
    button.addEventListener("click", function (e) {

      let btnVal = e.target.value;
      console.log(e.target)
      switch (btnVal) {
        case "tointro":
          console.log("tointro")
          toggleVis('start');
          toggleVis('intro');
          break;

      }
    })
  }

})