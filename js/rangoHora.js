$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 540,
      max: 1440,
      values: [ 540, 1440 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( convertMsToHM((ui.values[ 0 ])) + " - " + convertMsToHM((ui.values[ 1 ])));
      }
    });
    $( "#amount" ).val( convertMsToHM($( "#slider-range" ).slider( "values", 0 )) +
      " - " + convertMsToHM($( "#slider-range" ).slider( "values", 1 ) ));
  } );

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
  function convertMsToHM(minutes) {
    let hours = Math.floor(minutes / 60);
  
    minutes = minutes % 60;
    hours = hours % 24;
  
    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;

  }