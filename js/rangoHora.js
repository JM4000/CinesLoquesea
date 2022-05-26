$(function () {
  $("#slider-range").slider({
    range: true,
    min: 540,
    max: 1440,
    values: [540, 1440],
    slide: function (event, ui) {
      $("#amount").val(convertMsToHM((ui.values[0])) + " - " + convertMsToHM((ui.values[1])));
      filter();
    }
  });
  $("#amount").val(convertMsToHM($("#slider-range").slider("values", 0)) +
    " - " + convertMsToHM($("#slider-range").slider("values", 1)));
    filter();
});

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function convertMsToHM(minutes) {
  let hours = Math.floor(minutes / 60);

  minutes = minutes % 60;
  hours = hours % 24;

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;

}

function filter() {
  let lower = parseInt((document.getElementById("amount").value).substring(0, 2)) * 60 + parseInt((document.getElementById("amount").value).substring(3, 5))
  let upper = parseInt((document.getElementById("amount").value).substring(8, 10)) * 60 + parseInt((document.getElementById("amount").value).substring(11, 13))
  if (upper == 0) upper = 24 * 60;

  const collection = document.getElementsByClassName("bHora");
  var a;

  Array.from(collection).forEach((element) =>{
    a = parseInt((element.textContent || element.innerText).substring(0, 2)) * 60 + parseInt((element.textContent || element.innerText).substring(3, 5));
    if(!rango(a, lower, upper)){
      element.style.display = "none";
    } else{
      element.style.display = "block";
    }
  });
}

function rango(num, low, high){
  if(low <= num && high >= num){
    return true;
  }else{
    return false;
  }
}
