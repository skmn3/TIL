package Java.basic.day_0420.no2;

public interface RemoteControl {
	
	// 상수 메소드
	int MAX_VOLUME = 10;
	int MIN_VOLUME = 0;
	
	// 추상 메소드
	void turnOn();
	void turnOff();
	void setVolume(int volume);
	
	// 디폴트 메소드
	default void setMute(boolean mute) {
		if(mute) {
			System.out.println("무음 처리합니다");
		} else {
			System.out.println("무음 해제합니다");
		}
	}
	
	// 정적 메소드
	static void ChangeBattery() {
		System.out.println("건전지를 교환합니다");
	}

}
