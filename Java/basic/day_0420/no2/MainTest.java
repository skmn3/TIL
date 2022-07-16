package Java.basic.day_0420.no2;

public class MainTest {

	public static void main(String[] args) {
		RemoteControl rc;
		
		rc = new Tv();
		rc = new Audio();
		
		rc.turnOn(); // Audio를 킵니다
		rc.turnOff(); // Audio를 끕니다
		rc.setVolume(8); // 현재 Audio 볼륨: 8
		rc.setVolume(20); // 현재 Audio 볼륨: 10
	}

}
