import { CanvasContext } from "CanvasContext"
import { Vector } from "Vector"
import { Line } from "Line"
import { Thing } from "Thing"


var canvasContext = new CanvasContext(document.getElementById('canvas'))

var lines = []

lines.push(new Line(new Vector(0,0), new Vector(100,0)))

// drawLine(lines[0])
// lines[0].translationVector = lines[0].translationVector.rotate(-45)
// drawLine(lines[0])

var x = 0

var thing = new Thing(1,new Vector(0,100), new Vector(1,1), function () {

	var side = 100

	var lines = []

	lines.push(new Line(new Vector(0,0), new Vector(side,0)))
	lines.push(new Line(new Vector(0,0), new Vector(0,side)))
	lines.push(new Line(new Vector(side,side), new Vector(0,-1*side)))
	lines.push(new Line(new Vector(side,side), new Vector(-1*side,0)))

	lines.forEach(function (line) {
		var clone = line.clone()
		clone.translationVector = clone.translationVector.add(thing.translationVector)
		//clone.translationVector = clone.translationVector.rotate(x+=0.0001)

		canvasContext.drawLine(clone)
		// line.translationVector = line.translationVector.add(new Vector(1,0))

	})

})

function animationLoop() {

	canvasContext.clear()

	thing.draw()
	thing.translationVector = thing.translationVector.add(new Vector(0.5,0.5))

	lines.forEach(function (line) {
		var clone = line.clone()
		//clone.translationVector = clone.translationVector.rotate(x+=1)
		clone.segmentVector = clone.segmentVector.rotate(x+=1)

		canvasContext.drawLine(clone)
		// line.translationVector = line.translationVector.add(new Vector(1,0))

	})




	requestAnimationFrame(animationLoop)
}

requestAnimationFrame(animationLoop)
