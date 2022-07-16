package Java.basic.day_0418.no1;

public abstract class Phone {

	public String owner;
	
	public Phone(String owner) {
		this.owner = owner;
	}
	
	public void turnOn() {
		System.out.println("폰 전원을 킵니다");
	}
	
	public void turnOff() {
		System.out.println("폰 전원을 끕니다.");
	}
    
}
