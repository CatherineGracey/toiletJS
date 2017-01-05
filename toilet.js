console.log("toilet ready to flush");

function pee(){
  document.getElementById("bowl").style.backgroundColor = "lemonchiffon";
}

function poop(){
  var poo = document.createElement('div');
  poo.className = "poo";
  poo.style.transform = "rotate(" + Math.round(Math.random() * 50 - 25) + "deg)";
  poo.style.width = Math.ceil(Math.random() * 150) + 50 + "px";
  poo.style.height = Math.ceil(Math.random() * 30) + 20 + "px";
  document.getElementById("bowl").appendChild(poo);
}

function flush(){
  var bowl = document.getElementById("bowl");
  if (bowl.style.backgroundColor !== "mintcream") {
    setTimeout(function(){
      bowl.style.backgroundColor = "mintcream";
      bowl.className = "flushPee";
    }, 1000);
  }
  var poos = document.getElementsByClassName("poo");
  if (poos.length > 0) {
    var timing = 4000 / poos.length;
    for (var p = 0; p < poos.length; p++){
      setTimeout(function(){
        var poo = document.getElementsByClassName("poo")[0];
        poo.parentElement.removeChild(poo);
      }, timing * p);
    }
  }
  setTimeout(function(){
    bowl.className = "";
  }, 5000);
}

document.getElementById("pee-btn").addEventListener("click", pee);
document.getElementById("poop-btn").addEventListener("click", poop);
document.getElementById("flush-btn").addEventListener("click", flush);
