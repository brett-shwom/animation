import { Vector } from "./Vector"

export function World(options) {
    options = options || {};

    this.height = options.height;
    this.objects = [];
    this.partialForces = new WeakMap;
    this.timestampOfLastUpdate = 0;
    /*0 probably isnt right*/
}

var GRAVITY_ACCELERATION_VECTOR = new Vector(0, 9.8); // m/s^2 -- probably need to convert to pixels/second^2

World.prototype.resetPartialForces = function () {
    this.partialForces = new WeakMap;
};

World.prototype.applyForce = function (object, force) {

    var accelerationVector = force.multiply(1 / object.mass); //f = ma

    return this.applyAcceleration(object, accelerationVector);

    // var newVelocityVector = new Vector(
    //     force.x * this.timeDifferenceInSeconds + object.velocityVector.x,
    //     force.y * this.timeDifferenceInSeconds + object.velocityVector.y
    // );

    // var newTranslationVector = new Vector(
    //     Math.pow(force.x, 2) / 2 + object.velocityVector.x * this.timeDifferenceInSeconds + object.translationVector.x,
    //     Math.pow(force.y, 2) / 2 + object.velocityVector.y * this.timeDifferenceInSeconds + object.translationVector.y
    // );

    // //console.log(newVelocityVector, newTranslationVector);

    // object.velocityVector = newVelocityVector;
    // object.translationVector = newTranslationVector;

};

World.prototype.applyAcceleration = function(object, accelerationVector) {
    var newVelocityVector = new Vector(
        accelerationVector.x * this.timeDifferenceInSeconds + object.velocityVector.x,
        accelerationVector.y * this.timeDifferenceInSeconds + object.velocityVector.y
    );



    var newTranslationVector = new Vector(
        object.translationVector.x + object.velocityVector.x * this.timeDifferenceInSeconds + 0.5 * accelerationVector.x * Math.pow(this.timeDifferenceInSeconds,2),
        object.translationVector.y + object.velocityVector.y * this.timeDifferenceInSeconds + 0.5 * accelerationVector.y * Math.pow(this.timeDifferenceInSeconds,2)
    );

    // if (accelerationVector.x !== 0) {
    //     alert(
    //         'this.timeDifferenceInSeconds: ' + this.timeDifferenceInSeconds + '\n' + 
    //         'accelerationVector.x: ' + accelerationVector.x + '\n' + 
    //         'newVelocityVector.x: ' + newVelocityVector.x  + "\n" +
    //         'newTranslationVector.x: ' + newTranslationVector.x +"\n" +
    //         'object.translationVector.x: ' + object.translationVector.x + "\n" +
    //         'object.velocityVector.x: ' + object.velocityVector.x
    //     )
    // }

    object.velocityVector = newVelocityVector;
    object.translationVector = newTranslationVector;
}

World.prototype.applyAccumulatedForces = function () {
    this.objects.forEach(function (object) {
        this.applyForce(object, this.partialForces.get(object));
    }.bind(this));
};

World.prototype.applyGroundCollision = function () {
    this.objects.forEach(function (object) {
        if (object.translationVector.y >= this.height) {
            object.translationVector = new Vector(object.translationVector.x, this.height);
            object.velocityVector = new Vector(object.velocityVector.x, 0);
        }
    }.bind(this));
};

World.prototype.update = function (timestamp) {

    this.timestampOfCurrentUpdate = timestamp;
    this.timeDifferenceInMilliseconds = this.timestampOfCurrentUpdate - this.timestampOfLastUpdate;
    this.timeDifferenceInSeconds = this.timeDifferenceInMilliseconds / 1000;


    this.applyGravity();
    //apply any other forces
    this.applyAccumulatedForces();
    this.applyGroundCollision();

    // /* just a demo*/
    // this.objects.forEach(function (object) {
    // 	object.translationVector = object.translationVector.add(new Vector(1,1))
    // })
    // /*end just a demo*/

    this.timestampOfLastUpdate = timestamp;
    this.resetPartialForces();
};

World.prototype.applyGravity = function () {
    this.objects.forEach(function (object) {
        this.addForce(object, GRAVITY_ACCELERATION_VECTOR.multiply(object.mass));
    }.bind(this));
};

World.prototype.addForce = function (object, forceVectorInNewtons) {
    if (!this.partialForces.has(object)) {
        this.partialForces.set(object, new Vector(0, 0));
    }

    this.partialForces.set(object, this.partialForces.get(object).add(forceVectorInNewtons));
};
