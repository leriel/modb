window.playDingWhenFull = true;
(function () {
   var audio = new Audio('http://www.orangefreesounds.com/wp-content/uploads/2014/11/ding.mp3?_=1');
   var wait = false;
   setInterval(function () {
      if (window.playDingWhenFull) {
        if ( Inventory.is_full(players[0]) && wait === false ){
           audio.play();
           wait = true;
        } else if (Inventory.is_full(players[0]) === false){
           wait = false;
        }
      }
   }, 1000);
})();
