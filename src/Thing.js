import { Vector } from "Vector"

export function Thing(mass, translationVector, velocityVector, drawingFunction) {
	this.mass = mass
	this.translationVector = translationVector
	this.velocityVector = velocityVector
	this.drawingFunction = this.draw = drawingFunction
	/*propulsion force ?*/
}