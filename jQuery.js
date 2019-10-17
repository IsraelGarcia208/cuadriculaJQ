$(document).ready(function(){
    
    $('.btn').css({position: 'relative', left: '5%', top:'-425px' });
    $('.cuadro').css({border: '3px solid blue', height: '90px', width: '90px', display: 'inline-block'});
    
  $('#button1').click(function () { 
        $('.unica .cuadro:first').css({background: 'yellow'});
        $('.unica .cuadro:last').css({background: 'yellow'});
        $('.unica .cuadro:nth-of-type(6)').css({background: 'yellow'});
        $('.unica .cuadro:nth-of-type(31)').css({background: 'yellow'});
    });
    $('#button2').click(function () { 
       $('cuadro').css({background:'white'});
    });
    $('#primeraodd').click(function(){
        $('.unica .cuadro:odd').css({background:'yellow'});
    });
});