export function World() {
	this.objects = []
	this.partialForces = new WeakMap
	this.timestampOfLastUpdate = 0 /*0 probably isnt right*/
}

var GRAVITY_FORCE = -9.8



World.prototype.resetPartialForces = function() {
	this.partialForces = new WeakMap
}

World.prototype.update = function (timestamp) {
	this.resetPartialForces()
	/* just a demo*/
	this.objects.forEach(function (object) {
		object.translationVector = object.translationVector.add(new Vector(1,1)) 
	})
	/*end just a demo*/


	this.timestampOfLastUpdate = timestamp
}

World.prototype.applyGravity = function (forceVectorInNewtons) {
	this.objects.forEach(function (object) {

		this.addForce(object, forceVectorInNewtons)
	}.bind(this))
}

World.prototype.addForce = function (object, forceVectorInNewtons) {
	if (!partialForces.has(object)) {
		partialForces.set(object,new Vector(0,0))
	}

	partialForces.set(object,partialForces.get(object).add(forceVectorInNewtons))
}
