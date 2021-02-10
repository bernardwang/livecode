solid().out(o1)

voronoi(4).color(1, .1, () => Math.sin(time)/3).out(o0)

noise(5, .05).blend(solid(.2, .5, .7)).out(o1)

src(o0).blend(src(o1), 4).out(o2)

src(o2).modulateRotate(src(o1), 2).out(o3)
render()
