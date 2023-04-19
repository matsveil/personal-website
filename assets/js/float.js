$(function () {
  var $blob = $(".blob");

  function makeNewPosition() {
    var h = window.innerHeight - 1000;
    var w = window.innerWidth - 1000;
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    return { top: nh, left: nw };
  }

  function animateDiv() {
    var newq = makeNewPosition();
    var oldq = $blob.offset();
    var speed = calcSpeed(oldq, newq);
    $blob.animate(newq, speed, "linear", function () {
      window.requestAnimationFrame(animateDiv);
    });
  }

  function calcSpeed(prev, next) {
    var x = Math.abs(prev.left - next.left);
    var y = Math.abs(prev.top - next.top);
    var greatest = x > y ? x : y;
    var speedModifier = 0.03;
    var speed = Math.floor(greatest / speedModifier);
    return speed;
  }

  animateDiv();
});
