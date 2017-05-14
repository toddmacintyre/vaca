document.getElementById("splash").addEventListener("click", function(){
  document.getElementById("splash").className = "hide-splash";
  window.setTimeout(function() {
    document.getElementById("splash").remove();
  },1000);
});
if(window.location.href !== "http://localhost:1337/home" && window.location.href !== "http://localhost:1337" && window.location.href !== "http://localhost:1337/") {
    document.getElementById("splash").remove();
}
