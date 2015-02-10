import { Vector } from "Vector"

export function Line(translationVector, segmentVector) {
	this.translationVector = translationVector
	this.segmentVector = segmentVector
	Object.defineProperty(this, 'translatedSegmentVector', {
		get : function () { return this.translationVector.add(this.segmentVector) }
	})
	this.clone = function () {
		return new Line(new Vector(translationVector.x,translationVector.y), new Vector(segmentVector.x, segmentVector.y))
	}
}