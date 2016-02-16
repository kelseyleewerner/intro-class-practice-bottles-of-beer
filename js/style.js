
$(document).ready(function() {

  $('button').click(function() {
    for (var beer = 99; beer >= 1; beer -=1) {
     $('#test').append(beer + ' bottle of beer on the wall! ' + beer + ' bottle of beer! You take one down, pass it around, ' + (beer -1) + ' on the wall!')

   }


  });



});
