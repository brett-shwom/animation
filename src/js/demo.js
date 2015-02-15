import { CanvasRenderer } from "./CanvasRenderer"
import { Vector } from "./Vector"
import { Line } from "./Line"
import { Thing } from "./Thing"
import { World } from "./World"
import { Spring } from "./Spring"


var thing = new Thing(1, new Vector(100, 200), new Vector(0, 0), function (renderer) {

    var side = 100;

    var lines = [];
    lines.push(new Line(this.translationVector, new Vector(side,0)));
    lines.push(new Line(this.translationVector, new Vector(0,side)));
    lines.push(new Line(this.translationVector.add(new Vector(side,side)), new Vector(0,-1*side)));
    lines.push(new Line(this.translationVector.add(new Vector(side,side)), new Vector(-1*side,0)));
    lines.forEach(function (line) {
        renderer.drawLine(line)
    });

});

var person = new Thing(1, new Vector(500,500))

var spring = new Spring(5);

var objects = [];


var renderer = new CanvasRenderer(document.getElementById('canvas'));
var world = new World({
    height : 500
});
/*probably should pass a start timestamp*/

world.objects.push(thing);


function animationLoop(timestamp) {
    world.update(timestamp);
    renderer.update(world.objects);

    requestAnimationFrame(animationLoop);
}

requestAnimationFrame(animationLoop);
