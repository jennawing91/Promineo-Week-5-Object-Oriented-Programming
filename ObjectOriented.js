var test = [];
var suppliesList = [];
function deleteFromArray(index, arr){
    arr2 = []
    for(let i = 0; i < arr.length; i++){
        if (i != index){
          arr2.push(arr[i])
      }
    }
    return arr2;
}

class ArtSupplies {                 // a list of art supply properties
    constructor(medium, brand, type, count){
        this.medium = medium;
        this.brand = brand;
        this.type = type;
        this.count = count;
        }
    // method to print out the properties of our art supplies
    describe() {        
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
        while (selection != 0) {
            switch (selection) {
                case "1":
                    this.createSupplyEntry();
                    break;
                case "2":
                    this.viewSupplyEntry();
                    break;
                case "3":
                    this.deleteSupplyEntry();
                    break;
                case "4":
                    this.displaySupplyEntry();
                    break;
                default:
                    selection = 0;  
            }
            selection = this.showMainMenuOptions();
        }
        alert("Have a good day!");
    }
    showMainMenuOptions() {           // ends the menu prompt if 0 is selected
                  // prompt to pick an option
        return prompt(`
        1) Create a supply entry
        2) View supply entry
        3) Delete supply entry
        4) Display list of entered supplies
        0) Exit menu
        `);

    }
    createSupplyEntry() {
        let medium = prompt("medium");
        let brand = prompt("brand");
        let type = prompt("type");
        let count = prompt("count");
        let supplies = new ArtSupplies(medium, brand, type, count);
        alert("createSupplyEntry");
        suppliesList.push(supplies);
    }
    viewSupplyEntry(){
        alert("Number of created supplies:" + suppliesList.length);
    }
    deleteSupplyEntry() {
        alert("created supplies:" + suppliesList.length);
        let deleteEntry = prompt("Enter a number from 0: " + (suppliesList.length-1));
        suppliesList = deleteFromArray(deleteEntry,suppliesList);
        alert("Deleted Supplies");
    }
    displaySupplyEntry() {
        let s = "";
            for(let i = 0; i < suppliesList.length; i++){
                s += "medium = " + suppliesList[i].medium + "\n" +
                     "brand = " + suppliesList[i].brand + "\n" +
                     "type =" + suppliesList[i].type + "\n" +
                     "count =" + suppliesList[i].count +
                     "\n"
            }
         alert("Entered supplies:\n" + s);
    }
   
}
let myMenu = new Menu ();
myMenu.start();
