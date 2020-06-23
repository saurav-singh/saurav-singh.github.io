// OLD CODE NEED TO CLEAN UP AND IMPROVE

let x = [];
function resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    createCanvas(w, h);
    strokeWeight(5);
    stroke(255);
    noFill();
    smooth();
}

function setup() {
    resize();
}

function draw() {

    background(255);

    if (mouseIsPressed) {
        x.push(new Curves(mouseX, mouseY));
    }

    if (x.length > 0) {
        for (let i = x.length - 1; i >= 0; i--) {
            x[i].update();
            x[i].art();
        }
    }

    if (x.length > 100) {
        x = x.slice(1, -1);
    }
}

function Curves(x, y) {
    this.pos = createVector(x, y);
    this.dir = createVector(0, 0);
    this.life = 0;
    this.change = random(-1, 1);
    this.changeCheck = random(0.5, 5.5);
    this.color = color(random(0, 250), random(0, 250), random(0, 255));
    this.size = 2;
    this.sizeAcceleration = 0.2;

    this.art = function () {
        stroke(this.color);
        stroke(mouseX, 200, mouseY);
        strokeWeight(1)
        ellipse(this.pos.x, this.pos.y, this.size, this.size);
    };

    this.update = function () {
        if (this.life >= this.changeCheck) {
            this.life++;
            this.change *= -1;
            this.changeCheck = random(0.5, 5.5);
            this.size += this.sizeAcceleration;
            this.sizeAcceleration += random(0.5, 2);
        }

        this.dir = createVector(
            //x-change
            sin(this.life),
            //y-change
            cos(this.life) * this.change
        );
        this.pos.add(this.dir);
        this.life += 0.05;
    };
}
