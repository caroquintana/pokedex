$(document).ready(function() {
  //llamada ajax
    $.ajax({
    url: 'http://pokeapi.co/api/v2/pokemon/',
    type: 'GET',
    dataType: 'JSON',
    data: {"limit":"811"},
    })
    .done(function(response) {
        for(var i=1; i <= 50; i++){ //solo traigo 50 pokemones para que no colapse el github
          //aquí inserto en el div las imagenes de los pokemones aplicandole una clase de materialize
        $('#todospokemones').append("<a class='waves-effect waves-light btn' href='#modal1'><img id='"+i+"' src='http://pokeapi.co/media/img/"+i+".png'></a>");
        }
        $('#todospokemones').on('click','img',function(){
            var id = $(this).attr('id'); //darle el atributo id al pokemon
            //La función $.get() solo provee una función para saber que la operación fue exitosa.
            $.get('http://pokeapi.co/api/v2/pokemon/' + id, function(pokemon){
                var insertarInfo = "";
                insertarInfo += "<h1>" + pokemon.name.toUpperCase() + "</h1>"; //que el nombre del pokemon quede en mayuscula
                insertarInfo += "<p><img src='http://pokeapi.co/media/img/" + pokemon.id + ".png'></p>"; //llamando a la imagen dentro del modal según id
                insertarInfo += "<h2>Tipo</h2>"; //
                for(var i = 0; i < pokemon.types.length; i++) { // bucle que me trae el tipo del pokemon del json
                    insertarInfo += "<p>" + pokemon.types[i].type.name + "</p>"; //y lo inserta en una etiqueta p
                }
                insertarInfo += "<h4>Mide</h4>";
                insertarInfo += "<p>" + pokemon.height + " metros." + "</p>"; //traeme la altura
                insertarInfo += "<h4>Pesa</h4>";
                insertarInfo += "<p>" + pokemon.weight + " kilos." + "</p>"; //traeme el peso
                $('.modal-content').html(insertarInfo); //inserta todo esto en el modal-content
            }, "json");

        }); 

    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
    
});


//config de modal según materialize
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