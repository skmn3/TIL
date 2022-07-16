package Java.basic.day_0420.no2;

public class MainTest {

	public static void main(String[] args) {
		RemoteControl rc;
		
		rc = new Tv();
		rc = new Audio();
		
		rc.turnOn();
		rc.turnOff();
		rc.setVolume(8);
		rc.setVolume(20);
	}
	
}
