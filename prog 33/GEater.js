let GHG = require('./GHG')
module.exports = class GrassEater extends GHG {
    constructor(x, y) {
        super(x, y)
        this.energy = 8;

        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    search(char) {
        this.getNewCoordinates();
        return super.search(char);
     }
     
    mul() {
        let found = this.search(0)
        let foundRand = random(found)
        if (foundRand) {
            let newX = foundRand[0];
            let newY = foundRand[1];
            matrix[newY][newX] = 2;
            let newGrass = new GrassEater(newX, newY)
            GrassEaterArr.push(newGrass);
            this.energy = 8
        }

    }

    move() {
        this.energy--
        let found = this.search(0)
        let foundRand = random(found)
        if (foundRand && this.energy > 0) {
            let newX = foundRand[0];
            let newY = foundRand[1];
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY

        }
        else if (this.energy == 0) {
            this.die()
        }
    }
    eat() {

        let found = this.search(1)
        let foundRand = random(found)
        let bibi = this.search(4)
        let bibiRand = random(bibi)
        if (bibiRand) {
            let newX = bibiRand[0];
            let newY = bibiRand[1];
            matrix[newY][newX] = 2;
            for (var i in bobiArr) {
                if (newX == bobiArr[i].x && newY == bobiArr[i].y) {
                    bobiArr.splice(i, 1);
                    break;
                }
            }
            let newGrass = new GrassEater(newX, newY)
            GrassEaterArr.push(newGrass);
        }
        else if (foundRand) {
            let newX = foundRand[0];
            let newY = foundRand[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            this.energy++
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 14) {
                this.mul()
            }

        }
        else {
            this.move()
        }

    }
    die() {
        matrix[this.y][this.x] = 0
        for (var i in GrassEaterArr) {
            if (this.x == GrassEaterArr[i].x && this.y == GrassEaterArr[i].y) {
                GrassEaterArr.splice(i, 1);
                break;
            }
        }
    }
}

