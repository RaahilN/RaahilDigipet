function Tamogotchi(tamoName) {
    //
    this.petName;
    this.initialFood = 60;
    this.metabolismRate = 1000; // for every 1000ms, the pet loses 1 hitpoint/foodvalue
    this.food;

    this.init = () => {
        this.petName = tamoName;
        document.getElementById("counter").innerText = `Hi!  I'm ${this.petName}`

        this.hatch();
        var name = window.prompt("What is your name?");
        document.getElementById("titletext").innerText =  `Welcome ${name}, Feed Your Digital Pet`
    }
    this.init();
}
Tamogotchi.prototype.resetFood = function(){
    this.food=this.initialFood;
}

Tamogotchi.prototype.hatch = function(){
    this.resetFood();
    this.startMetabolism();
}
Tamogotchi.prototype.die = function(){
    clearInterval(this.metabolism);
    document.getElementById("counter").innerText = `${this.petName} is dead`
    // Set the image of the pet to be dead
    document.getElementById("pet").src ="images.jpg"
}
Tamogotchi.prototype.startMetabolism = function(){
    this.metabolism = setInterval(()=> {
        this.food -=1;
        document.getElementById("counter").innerText = `${this.food} until I starve`
        if(this.food<=0){
            this.die();
        }
    },this.metabolismRate);
}

Tamogotchi.prototype.eatLasagna = function() {
    this.food +=20; // pet gains 20 HP
    document.getElementById("counter").innerText = `Delicious! HP: ${this.food}`
}

// this function has NO input and NO output, BUT it changes the "this" object, "this" is the pet 
// SIDE EFFECT, when a function does not have INPUT or OUTPUT, but still affects the system
Tamogotchi.prototype.feedOnion = function() {
    this.food += 10; // pet gains 10 HP
    document.getElementById("counter").innerText = "YUM I LOVE ONION MUNCH MUNCH"
}

Tamogotchi.prototype.punchPet = function() {
    if (this.food > 0) {
        
    this.food -= 20; // pet loses 20 HP
    document.getElementById("counter").innerText = "OWCH! THAT HURT ME"

    document.getElementById("pet").src ="download.png"
}
    setTimeout(() => {
        if (this.food > 0)
        document.getElementById("pet").src ="download (1).jpg"
    }, 1000); // After 1 second, change the image back to the happy version
}

Tamogotchi.prototype.resetPet = function () {
    clearInterval(this.metabolism);
    this.hatch()
    if (this.food > 0)
    document.getElementById("pet").src ="download (1).jpg"
}

let Bob = new Tamogotchi("Bob")

function eatLasagna() {
    Bob.eatLasagna()
}

function feedOnion() {
    Bob.feedOnion()
}

function punchPet() {
    Bob.punchPet()
}

function resetPet() {
    Bob.resetPet()
}