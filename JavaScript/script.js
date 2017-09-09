
jQuery('document').ready(function(){

  $("#press").click(function(){

      $("h3").html("Hello <b>world!");
    });
  $("#dontPress").click(function(){

      document.location.reload();

    });



});
