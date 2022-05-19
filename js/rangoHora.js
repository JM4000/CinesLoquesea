$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 32400000,
      max: 86400000,
      values: [ 32400000, 86400000 ],
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
  
  function convertMsToHM(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
  
    seconds = seconds % 60;
    
    minutes = seconds >= 30 ? minutes + 1 : minutes;
  
    minutes = minutes % 60;
    hours = hours % 24;
  
    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;

  }