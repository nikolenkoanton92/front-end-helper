// Ejecuto funcion cada determinado tiempo
setInterval(
  function() {
    _time();
  }, 1000);

function _time() {
    // obtengo tiempo
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();

    // Creo objetos
    var $horas = $('.hora');
    var $minutos = $('.minuto');
    var $segundos = $('.segundo');

    // Define Grados a moverse segun tiempo
    var hDeg = 360 * h / 12;
    var mDeg = 360 * m / 60;
    var sDeg = 360 * s / 60;

    // Horas
    $horas.css({
      '-webkit-transform': 'rotate(' + hDeg + 'deg)',
      '-moz-transform': 'rotate(' + hDeg + 'deg)',
      '-ms-transform': 'rotate(' + hDeg + 'deg)',
      '-o-transform': 'rotate(' + hDeg + 'deg)',
      'transform': 'rotate(' + hDeg + 'deg)',
      'zoom': 1
    });

    // Minutos
    $minutos.css({
      '-webkit-transform': 'rotate(' + mDeg + 'deg)',
      '-moz-transform': 'rotate(' + mDeg + 'deg)',
      '-ms-transform': 'rotate(' + mDeg + 'deg)',
      '-o-transform': 'rotate(' + mDeg + 'deg)',
      'transform': 'rotate(' + mDeg + 'deg)',
      'zoom': 1
    });

    // Segundos
    $segundos.css({
      '-webkit-transform': 'rotate(' + sDeg + 'deg)',
      '-moz-transform': 'rotate(' + sDeg + 'deg)',
      '-ms-transform': 'rotate(' + sDeg + 'deg)',
      '-o-transform': 'rotate(' + sDeg + 'deg)',
      'transform': 'rotate(' + sDeg + 'deg)',
      'zoom': 1
    });
  }
  // fin reloj
