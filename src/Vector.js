export function Vector(x,y) {
	this.x = x
	this.y = y

	Object.defineProperties(this, {
		'rotationInRadians':  {
			get : function () { return Math.atan2(this.y, this.x) }
		},
		'rotationInDegrees': {
			get : function () { return this.rotationInRadians / Math.PI * 180 }
		},
		'magnitude' : {
			get : function () { return Math.sqrt(Math.pow(this.x,2), Math.pow(this.y,2) )}
		}
	})
}

Vector.prototype.multiply = function(scaleFactor) {
	return new Vector(this.x*scaleFactor, this.y*scaleFactor)
} 

Vector.prototype.add = function(vector) {
	return new Vector(this.x + vector.x,this.y + vector.y )
}

Vector.prototype.rotate = function(degrees) {
	var newRotationInDegrees = this.rotationInDegrees + degrees
	console.log(newRotationInDegrees)
	var newRotationInRadians = newRotationInDegrees * Math.PI / 180

	var x = Math.sin(newRotationInRadians) * this.magnitude
	var y = Math.cos(newRotationInRadians) * this.magnitude

	return new Vector(x,y)
}