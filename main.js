document.getElementById("btn").addEventListener("click", randomQuote);
document.addEventListener("DOMContentLoaded", randomQuote);

function randomQuote(){
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://thatsthespir.it/api", true);

  xhr.onload = function() {
    if(this.status == 200) {
      var text = JSON.parse(this.responseText);

      console.log(this.responseText);

      document.getElementById("img").src = text.photo;
      document.getElementById("quote").innerHTML = text.quote;
      document.getElementById("author").innerHTML = "-" + text.author;
    }
  }

  xhr.onerror = function() {
    console.log("error!");
  }

  xhr.send();
}
