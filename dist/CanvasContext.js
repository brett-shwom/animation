"use strict";

function CanvasContext(canvas) {
	var context = canvas.getContext("2d");


	function drawLine(line) {
		context.beginPath();
		context.moveTo(line.translationVector.x, line.translationVector.y);
		context.lineTo(line.translatedSegmentVector.x, line.translatedSegmentVector.y);
		context.stroke();
	}

	function clear() {
		context.clearRect(0, 0, canvas.width, canvas.height);
	}

	this.drawLine = drawLine;
	this.clear = clear;
}