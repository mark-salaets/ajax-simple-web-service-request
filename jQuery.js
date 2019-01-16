$(document).ready(function() {
  $("#btn").trigger("click", myFunction());

  $("#btn").click(myFunction);

    function myFunction(){
    $.ajax({url: "https://thatsthespir.it/api", success: function(result){
      $("#img").attr("src", result.photo);
      $("#quote").html(result.quote);
      $("#author").html("-" + result.author);
      console.log(result);
    }});
  };
})
