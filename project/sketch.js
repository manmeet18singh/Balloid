var ball;
var bArr;

function setup() {
    // put setup code here
    createCanvas(990, 899);
    //    ball = new Ball();
    bArr = [];
    for (var i = 0; i < 30; i++) {
        bArr.push(new Ball());
    }
}

function draw() {
    // put drawing code here 
    background(255, 107, 81);
    //    ball.display();
    //        ball.moveIt();
    for (var i = 0; i < bArr.length; i++) {
        bArr[i].display();
        bArr[i].moveIt();
        for (var j = 0; j < bArr.length; j++) {
            bArr[i].lineO(bArr[j]);
            if (bArr[i].collide(bArr[j]) == true) {
                bArr[i].rvs();
                bArr[i].moveIt();
                bArr[j].rvs();
                bArr[j].moveIt();
            }

        }
    }
}

function Ball() {
    this.x = random(width);
    this.y = random(height);
    this.diam = 10;
    this.xVelo = random(1, 2);
    this.yVelo = random(1, 2);
    this.r;
    this.g;
    this.b;
    this.display = function() {
        noStroke();
        fill(81, 255, 214);
        ellipse(this.x, this.y, this.diam);
    }

    this.moveIt = function() {
        if (this.x > width || this.x < 0) {
            this.xVelo = this.xVelo * (-1);
        }
        if (this.y > height || this.y < 0) {
            this.yVelo = this.yVelo * (-1);
        }
        this.x += this.xVelo;
        this.y += this.yVelo;
    }

    this.collide = function(other) {
        var rad = dist(this.x, this.y, other.x, other.y);
        if (rad < this.diam / 2 + other.diam / 2) {
            return true;
        } else {
            return false;
        }
    }

    this.rvs = function() {
        this.xVelo = -this.xVelo;
        this.yVelo = -this.yVelo;
    }
    this.lineO = function(other) {
        var distO = dist(this.x, this.y, other.x, other.y);
        var trans = map(distO, 0, 200, 255, 0);
        stroke(255, trans);
        line(this.x, this.y, other.x, other.y);
    }
}