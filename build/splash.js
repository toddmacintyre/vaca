document.getElementById("splash").addEventListener("click", function(){
  // document.getElementById("splash").className = "hide-splash";
  document.getElementById("splash-1").className = "hide-splash-div";
  document.getElementById("splash-2").className = "hide-splash-div";
  document.getElementById("splash-3").className = "hide-splash-div";
  document.getElementById("splash-4").className = "hide-splash-div2";

  window.setTimeout(function() {
    document.getElementById("splash").remove();
  },4000);
});
if(window.location.href !== "http://localhost:1337/home" && window.location.href !== "http://localhost:1337" && window.location.href !== "http://localhost:1337/") {
    document.getElementById("splash").remove();
}
