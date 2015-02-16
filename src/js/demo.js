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
    height : 500 //meters or pixels?
});

window.world = world
/*probably should pass a start timestamp*/


window.addEventListener('keydown', function (event) {
    if (event.keyCode === 'A'.charCodeAt(0)) { //probably need to add a force for a specific period of time...
        world.addForce(thing, new Vector(1,0));
    }
    else if (event.keyCode === 'D'.charCodeAt(0)) {
        world.addForce(thing, new Vector(-1,0));
    }
})

world.objects.push(thing);

var debug = document.createElement('div')
debug.classList.add('debug')
debug.style.position = 'fixed'
debug.style.right = '240px';
debug.style.top = 0;
document.body.appendChild(debug)

function animationLoop(timestamp) {
    document.querySelector('.debug').innerHTML = Math.round(world.objects[0].translationVector.y)

    world.update(timestamp);
    renderer.update(world.objects);

    requestAnimationFrame(animationLoop);
}

requestAnimationFrame(animationLoop);
