console.clear()

var obj = $('#car'),
  moon = $('#moon'),
  w1 = $('#wheelOne'),
  w2 = $('#wheelTwo'),
  c1 = $('#cloudOne'),
  c2 = $('#cloudTwo'),
  c3 = $('#cloudThree'),
  fence = $('#fence'),
  doc = $(document);

// Mouse movement
function mouser() {
  doc.mousemove(function(e) {
    // move the car
    var spin = e.pageX * 6,
      carW = obj.outerWidth() / 2,
      pos = e.pageX - carW;
    TweenMax.set(w1, {
      transformOrigin: 'center center'
    })
    TweenMax.set(w2, {
      transformOrigin: 'center center'
    })
    TweenMax.to(obj, 0.1, {
      x: pos
    })
    TweenMax.to(w1, 0.1, {
      rotation: spin
    })
    TweenMax.to(w2, 0.1, {
      rotation: spin
    });
    // Move the Moon 
    var vMid = doc.width() / 2;
    var hMid = doc.height() / 2;
    var x = -(e.pageX - vMid) / 15;
    var c1x = -(e.pageX - vMid) / 10;
    var fx = -(e.pageX - vMid) * 2;
    TweenMax.to(moon, 0.1, {
      x: -x
    })
    // Move the clouds
    TweenMax.to(c1, 0.1, {
      x: c1x
    })
    TweenMax.to(c2, 0.1, {
      x: c1x
    })
    TweenMax.to(c3, 0.1, {
      x: c1x
    })
    TweenMax.to(fence, 0.1, {
      backgroundPosition: ""+fx+"px 0px"
    })
    
  });
}

mouser();
$(document).click(function() {
  $('.light').toggle();
});