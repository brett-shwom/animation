import { CanvasContext } from "CanvasContext"
import { Vector } from "Vector"
import { Line } from "Line"
import { Thing } from "Thing"
import { World } from "World"

var thing = new Thing(1,new Vector(100,200), new Vector(0,0), function (renderer) {

	var side = 100

	var lines = []

	lines.push(new Line(new Vector(0,0), new Vector(side,0)))
	lines.push(new Line(new Vector(0,0), new Vector(0,side)))
	lines.push(new Line(new Vector(side,side), new Vector(0,-1*side)))
	lines.push(new Line(new Vector(side,side), new Vector(-1*side,0)))

	lines.forEach(function (line) {
		renderer.drawLine(line)
	})

})

var objects = []


var renderer = new CanvasRenderer(document.getElementById('canvas'))
var world = new World /*probably should pass a start timestamp*/

world.objects.push(thing)

function animationLoop(timestamp) {
	world.update(timestamp)
	renderer.update(world.objects)

	requestAnimationFrame(animationLoop)
}

requestAnimationFrame(animationLoop)
