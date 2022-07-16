package Java.basic.day_0511.a1;

class Animal {}
class Dog extends Animal {}
class Cat extends Animal {}

public class ClassCastExceptionExample {
	
	public static void main(String[] args) {
		Dog dog = new Dog();
		changeDog(dog);
		
		Cat cat = new Cat();
		changeDog(cat);
	}
	
	public static void changeDog(Animal animal) {
		@SuppressWarnings("unused")
		Dog dog = (Dog) animal;        // ClassCastException 발생 가능
	}
	
}
