import { Vector } from "./Vector"

export function Spring(springConstant ) {

	/* 	Initially:

			- the spring is completely uncompressed
			- has no attached mass
			- is not oscillating

		The user can:
			- add an attached mass to the spring 
			- initiate oscillation

	*/

	this.attachedMass = 0;
	this.initialDisplacementVector = new Vector(0,0); //by default there is no displacement
	this.springConstant = springConstant;
	this.oscillationBeganAtTimeInMilliseconds = undefined;

	Object.defineProperty(this, 'forceVector', function () {
		return this.displacementVector.multiply(this.springConstant);
	}.bind(this));

}

Spring.prototype.startOscilating = function(timestampInMilliseconds) {
	this.oscillationBeganAtTimeInMilliseconds = timestampInMilliseconds;
};

Spring.prototype.attachMass = function(mass) {
	this.mass = mass;
};

Spring.prototype.displacementAtTimeInMilliseconds = function(timestampInMilliseconds) {


    var initialPhase = 0; //?

    var w = Math.sqrt(this.springConstant / this.mass);

    var amplitude = 1;
    // c1 * Math.cos(w * t) + c2 * Math.sin(w * t)
    return amplitude * Math.cos(w*t + initialPhase);
}


// function simpleHarmonicMotion(t,A,B,k,m) {
// 	return A * Math.sin(t * Math.sqrt(k / m)) + B * Math.cos(t * Math.sqrt(k / m))
// }