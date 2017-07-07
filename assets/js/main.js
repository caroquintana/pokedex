$(document).ready(function() {

    $.ajax({
    url: 'http://pokeapi.co/api/v2/pokemon/',
    type: 'GET',
    dataType: 'JSON',
    data: {"limit":"811"},
    })
    .done(function(response) {
        for(var i=1; i <= 100; i++){
        $('#todospokemones').append("<a class='waves-effect waves-light btn' href='#modal1'><img id='"+i+"' src='http://pokeapi.co/media/img/"+i+".png'></a>");
        }
        

    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
    
});



  $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        console.log(modal, trigger);
      },
      complete: function() {} // Callback for Modal close
    }
  );