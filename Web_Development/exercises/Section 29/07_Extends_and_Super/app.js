class Pet{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	eat() {
		return `${this.name} is not hungry`
	}
}

class Cat extends Pet{

	constructor(name,age,breed){
		super(name,age);
		this.breed=breed;
	}
	
	meow() {
		return "MEOWWWW!!";
	}
}

class Dog extends Pet{
	
	bark() {
		return "WOOOF!!";
	}
	eat() {
		return `${this.name} scarfs his food!`;
	}
}