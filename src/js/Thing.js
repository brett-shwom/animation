import { Vector } from "./Vector"

export function Thing(mass, translationVector, velocityVector, drawingFunction) {
    this.mass = mass;
    this.translationVector = translationVector;
    this.velocityVector = velocityVector;
    this.drawingFunction = this.draw = drawingFunction;
    /*propulsion force ?*/
}

//clone will probably get out of sync with the constructor
Thing.prototype.clone = function () {
    return new Thing(
        this.mass,
        this.translationVector,
        this.velocityVector,
        this.drawingFunction
    );
};