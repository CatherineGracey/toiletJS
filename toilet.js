console.log("toilet ready to flush");

function bang(){
  console.log("bang");
}

var bigBang = function(){
  console.log("BANG");
};

//bang();
//setTimeout(bigBang, 1000);

var pee = function(){
  document.getElementById("toilet").style.backgroundColor = "lemonchiffon";
}

var poop = function(){
  document.getElementById("toilet").style.backgroundColor = "darkolivegreen";
}

var flush = function(){
  var toilet = document.getElementById("toilet");
  if (toilet.style.backgroundColor === "darkolivegreen"){
    setTimeout(function(){
      toilet.style.backgroundColor = "mintcream";
      toilet.className = "flushPoop";
    }, 1000);
  } else if (toilet.style.backgroundColor === "lemonchiffon") {
    setTimeout(function(){
      toilet.style.backgroundColor = "mintcream";
      toilet.className = "flushPee";
    }, 1000);
  } else {
    setTimeout(function(){
      toilet.style.backgroundColor = "mintcream";
    }, 1000);
  }
  setTimeout(function(){
    toilet.className = "";
  }, 5000);
}

document.getElementById("pee-btn").addEventListener("click", pee);
document.getElementById("poop-btn").addEventListener("click", poop);
document.getElementById("flush-btn").addEventListener("click", flush);
