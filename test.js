resetBuffer = (buffer) => solid().out(buffer);

resetAll = () => {
  [o0, o1, o2, o3].forEach(
    (buffer) => {
      solid().out(buffer)
    }
  )
};

resetAll();

render();

// Declare default variable value
switch = 0;

// Define value on key press
document.addEventListener('keydown', () => {
	switch = 1 ;
});

// Return to default value after key press
document.addEventListener('keyup', () => {
	switch = 0 ;
});

// audio — a is the inbuilt audio object
a.show();
a.setBins(4)
a.setScale(2)
a.setSmooth(0.9)

beat = () => (osc(3, 0.2, 300)
//.rotate(() => Math.cos(time))
.mask(
 shape(2)
 .rotate(() => Math.sin(time))
 .scale(() => 3*Math.cos(time))
))

oil = () => (noise(3, 0.1, 2)
.blend(solid(1,1,1))
.blend(solid(1, .4, () => 2 * Math.sin(time/5)))
.modulateRotate(noise(3).color(1,2,0.2)))

beat().out(o0)
oil().modulateRotate(test(),3).out(o1)
beat().diff(o1).out(o2)

//s1.initCam();
//src(o2).blend(src(s1).pixelate()).out(o3)
//render(o3)en(0)
src(s2).out(o3)
render(s2)
