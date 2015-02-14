import { CanvasContext } from "CanvasContext"
import { Vector } from "Vector"
import { Line } from "Line"
import { Thing } from "Thing"
import { World } from "World"

var thing = new Thing(1,new Vector(100,200), new Vector(0,0), function (renderer) {

	var side = 10

	var lines = []



	lines.push(new Line(this.translationVector, new Vector(side,0)))
	lines.push(new Line(this.translationVector, new Vector(0,side)))


	lines.push(new Line(this.translationVector.add(new Vector(side,side)), new Vector(0,-1*side)))
	lines.push(new Line(this.translationVector.add(new Vector(side,side)), new Vector(-1*side,0)))

	lines.forEach(function (line) {
		renderer.drawLine(line)
	})

})

var objects = []


var renderer = new CanvasRenderer(document.getElementById('canvas'))
var world = new World /*probably should pass a start timestamp*/

;(Array.apply(null, Array(10))).forEach(function () {
	var otherThing = thing.clone()
	otherThing.translationVector = otherThing.translationVector.add(new Vector(Math.random() * 100,Math.random() * 100))
	world.objects.push(otherThing)
})


function animationLoop(timestamp) {
	world.update(timestamp)
	renderer.update(world.objects)

	requestAnimationFrame(animationLoop)
}

requestAnimationFrame(animationLoop)
