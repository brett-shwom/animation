var expect = chai.expect;
import { Vector } from "../../src/js/Vector";

describe('Vector', function () {
    describe('Creating', function () {

        beforeEach(() =>  this.vector = new Vector(1, 2));

        it('Sets X ', () => expect(this.vector.x).to.equal(1));

        it('Sets Y ', () => expect(this.vector.y).to.equal(2));

    });
});