$(document).ready(function(){
    
//////////////// parallax ////////////////////
    
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);
    
    
    
    //////////////////// Rellax ///////////////////////

    
    var rellax = new Rellax('.rellax', {
    speed: 2,
//    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false,
        center: true,
        
  });
    
});

new WOW().init();