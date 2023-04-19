$(document).ready(function () {
  animateDiv();

});

function makeNewPosition() {

  // Get viewport dimensions (remove the dimension of the div)
  var h = $(window).height() - 1000;
  var w = $(window).width() - 1000;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh, nw];

}

function animateDiv() {
  var newq = makeNewPosition();
  var oldq = $(".blob").offset();
  var speed = calcSpeed([oldq.top, oldq.left], newq);

  $(".blob").animate({ top: newq[0], left: newq[1] }, speed, function () {
    animateDiv();
  });

};

function calcSpeed(prev, next) {

  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);

  var greatest = x > y ? x : y;

  var speedModifier = 0.03;

  var speed = Math.ceil(greatest / speedModifier);

  return speed;

}
