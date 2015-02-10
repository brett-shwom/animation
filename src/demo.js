import { CanvasContext } from "CanvasContext"
import { Vector } from "Vector"


var canvasContext = new CanvasContext(document.getElementById('canvas'))

var lines = []

lines.push(new Line(new Vector(0,0), new Vector(100,0)))

// drawLine(lines[0])
// lines[0].translationVector = lines[0].translationVector.rotate(-45)
// drawLine(lines[0])

x = 0

function animationLoop() {

	clear()
	lines.forEach(function (line) {
		var clone = line.clone()
		//clone.translationVector = clone.translationVector.rotate(x+=1)
		clone.segmentVector = clone.segmentVector.rotate(x+=1)

		drawLine(clone)
		// line.translationVector = line.translationVector.add(new Vector(1,0))

	})


	requestAnimationFrame(animationLoop)
}

requestAnimationFrame(animationLoop)
