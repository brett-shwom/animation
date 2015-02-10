import { Vector } from "Vector"

export function Line(translationVector, segmentVector) {
	this.translationVector = translationVector
	this.segmentVector = segmentVector
	Object.defineProperty(this, 'translatedSegmentVector', {
		get : function () { return this.translationVector.add(this.segmentVector) }
	})

}

Line.prototype.clone = function () {
	return new Line(new Vector(this.translationVector.x,this.translationVector.y), new Vector(this.segmentVector.x, this.segmentVector.y))
}

Line.prototype.draw = function (renderer) {
	renderer.drawLine(this)
}


