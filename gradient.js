// by Zach Krall
// http://zachkrall.online/

osc( 10, 0.1, 5 )
.modulate(
  osc( 5, -0.3, 100 )
  .rotate(45)
)
.color( .9, .60, 0.6 )
.modulate(
  osc( 600, 0.4 )
  .rotate( 1 )
)
.add(
  osc( 1, -0.9, 100 )
  .color(1,0,1)
)
//.mult(
//  shape(900, .1, 2)
//  .luma()
//  .repeatX(2)
//  .repeatY(2)
//  .colorama(10)
//)
.modulate(
  osc( 9, -0.3, 900 )
  .rotate( 6 )
)
.add(
  osc(4, 1, 90)
  .color(0.2,0,1)
)
.out()
