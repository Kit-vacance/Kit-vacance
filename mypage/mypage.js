document.getElementById("orderButton").addEventListener("click", function(){
  document.getElementById("orderContents").style.display="block";
  document.getElementById("checkProducts").style.display="none";
  document.getElementById("shoppingAddress").style.display="none";
  document.getElementById("modiFy").style.display="none";
})

document.getElementById("checkButton").addEventListener("click", function(){
  document.getElementById("orderContents").style.display="none";
  document.getElementById("checkProducts").style.display="block";
  document.getElementById("shoppingAddress").style.display="none";
  document.getElementById("modiFy").style.display="none";
})

document.getElementById("addressButton").addEventListener("click", function(){
  document.getElementById("orderContents").style.display="none";
  document.getElementById("checkProducts").style.display="none";
  document.getElementById("shoppingAddress").style.display="block";
  document.getElementById("modiFy").style.display="none";
})

document.getElementById("modifyButton").addEventListener("click", function(){
  document.getElementById("orderContents").style.display="none";
  document.getElementById("checkProducts").style.display="none";
  document.getElementById("shoppingAddress").style.display="none";
  document.getElementById("modiFy").style.display="block";
})