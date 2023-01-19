var test = [];

class ArtSupplies {                 // main class
    constructor(medium, brand, type, count){
        this.medium = medium;
        this.brand = brand;
        this.type = type;
        this.count = count;
        }
    describe() {
        console.log();
        console.log("Medium: " + this.medium);
        console.log("Brand: " + this.brand);
        console.log("Type: " + this.type);
        console.log("Count: " + this.count);
    }
}
// test to see how ArtSupplies class prints
// break each property into a different prompt for the user to enter
// push each instance to an array
var paper = new ArtSupplies('paper', 'Canson', 'watercolor', '20' + ' pages');
test.push(paper);
console.log('This is a test',test);
paper.describe();  

class Paints extends ArtSupplies {  // first class with inheritance of ArtSupplies
    constructor(medium, brand, type, count){
        super(medium);
        this.medium = medium;
        this.brand = brand;
        this.type = type;
        this.count = count;
        }
    describe() {
        console.log();
        console.log("Medium: " + this.medium);
        console.log("Brand: " + this.brand);
        console.log("Type: " + this.type);
        console.log("Count: " + this.count);
    }
}
// test to see how Paints class prints
var ganziTambi = new Paints('watercolor', 'Zig', 'pans', '36');
ganziTambi.describe();

class Markers extends ArtSupplies {   // second class with inheritance of ArtSupplies
    constructor(brand, type, count){
        super(brand);
        this.brand = brand;
        this.type = type;
        this.count = count;
        }
    describe() {
        console.log();
        console.log("Brand: " + this.brand);
        console.log("Type: " + this.type);
        console.log("Count: " + this.count);
    }
}
// test to see how Markers class prints
var cleanColor = new Markers('Zig', 'water-based', '36');
cleanColor.describe();

class Pencils extends ArtSupplies {   // third class with inheritance of ArtSupplies
    constructor(medium, brand, type, count){
        super(medium);
        console.log("Medium: " + this.medium);
        console.log("Brand: " + this.brand);
        console.log("Type: " + this.type);
        console.log("Count: " + this.count);
        }
    describe() {
        console.log();
        console.log(this.medium);
        console.log(this.brand);
        console.log(this.type);
        console.log(this.count);
    }
}
// test to see how Pencils class prints
var inktense = ('watercolor', 'Derwent', 'ink', '72');
inktense.describe();

