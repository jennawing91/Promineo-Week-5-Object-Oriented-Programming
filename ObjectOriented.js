var test = [];

class ArtSupplies {                 // a list of art supply properties
    constructor(medium, brand, type, count){
        this.medium = medium;
        this.brand = brand;
        this.type = type;
        this.count = count;
        }
    // method to print out the properties of our art supplies
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
//var paper = new ArtSupplies('paper', 'Canson', 'watercolor', '20' + ' pages');
//test.push(paper);
//console.log('This is a test',test);
//paper.describe();  

class Medium{
     constructor(mediumValue) {
        this.medium = mediumValue;
    }
}

    // start of user input
class Menu{
    constructor() {
        this.artSupplies = [];
        this.mediumSelection = null;
    }
    start(){               // begins the iteration through the menu
        let selection = this.showMainMenuOptions();
        while (selection != 0);
            switch (selection) {
                case "1":
                    this.createSupplyEntry;
                    break;
                case "2":
                    this.viewSupplyEntry;
                    break;
                case "3":
                    this.deleteSupplyEntry;
                    break;
                case "4":
                    this.displaySupplies;
                    break;
                default:
                    selection = 0;  
            }
            selection = this.showMainMenuOptions();
}
showMainMenuOptions() {           // ends the menu prompt if 0 is selected
    alert("Have a good day!");
}
showMediumOptions() {             // prompt to pick an option
    return prompt(`
    1) Create a supply entry
    2) View supply entry
    3) Delete supply entry
    4) Display list of entered supplies
    0) Exit menu
    `);
}
displaySupplies() {
    
}
deleteSupplyEntry() {

}
createSupplyEntry() {
    let medium = prompt(`Enter type of medium:`);
    this.artSupplies.push(new Medium(medium));
}
}
let myMenu = new Menu ();
myMenu.start();
