class Animal {
	constructor (color, position){
		this.color = color;
		this.position = position;
	}
	
	move(position){
		this.position = position;
	}
	
	
}

class Mammal extends Animal{
	
	constructor(color, position, hairType){
		super(color, position);
		this.hairType = hairType;
	}
	
}

class Dog extends Mammal {

	constructor(color, position, hairType, name, breed, hairLength, barkSound){
		super(color, position, hairType);
		this.name = name;
		this.hairLength = hairLength;
		this.barkSound = barkSound;
		this.breed = breed;
	}
	
	Bark(){
		document.writeln(barkSound);
	}
	
	Speak(){
		this.Bark();
	}


	Sit(){
		Animal.prototype.move("sitting");
	}
	
	Run(){
		Animal.prototype.move("running");
	}

	Stand (){
		Animal.prototype.move("standing");
	}
	
	set barkSound(newSound){
		this.barkSound = newSound;
	}
	
	set hairLength (length) {
		this.hairLength = length;
	}
	
	set setName (name) {
		this.name = name;
	}
	
}