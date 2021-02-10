s0.initCam()
src(s0).out(o0)

noise().scale(Math.sin(time)*8).diff(solid(1, .1, () => Math.sin(time))).modulateKaleid(o0).out(o1)


render();
