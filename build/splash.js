document.getElementById("splash").addEventListener("click", function(){
  document.getElementById("splash").className = "hide-splash";
  window.setTimeout(function() {
    document.getElementById("splash").remove();
  },1000);
});
