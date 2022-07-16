package Java.basic.day_0518.a3;

public class ExitExample {
	
	public static void main(String[] args) {
		for(int i=0; i < 10; i++) {
			System.out.println(i);
		}
		
		System.out.println(0); // 일반적으로 종료일 경우 0으로 지정하고
							   // 비정상 종료일 경우 0 이외의 다른 값을 준다.
		
		for(int i = 0; i<10; i++) {
			System.out.println(i);
		}
		
		System.exit(0);
	}

}
