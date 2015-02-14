export function CanvasRenderer(canvas) {

    this.context = canvas.getContext('2d');
    this.canvas = canvas

}

CanvasRenderer.prototype.drawLine = function (line) {
    this.context.beginPath();
    this.context.moveTo(line.translationVector.x, line.translationVector.y);
    this.context.lineTo(line.translatedSegmentVector.x, line.translatedSegmentVector.y);
    this.context.stroke()
};

CanvasRenderer.prototype.clear = function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
};

CanvasRenderer.prototype.update = function (objects) {
    this.clear();

    objects.forEach(function (object) {
        object.draw(this)
    }.bind(this))
};