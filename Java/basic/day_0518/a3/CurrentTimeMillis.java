package Java.basic.day_0518.a3;

public class CurrentTimeMillis {

	public static void main(String[] args) {
		
		long time1 = System.currentTimeMillis();
		long t1 = System.nanoTime();
		
		int sum = 0;
		for(int i = 0; i <= 1000000; i++) {
			sum += i;
		}
		
		long time2 = System.currentTimeMillis();
		long t2 = System.nanoTime();
		
		System.out.println("1 ~ 1000000까지의 합: " + sum);
		System.out.println("계산에 " + (time2 - time1) + " 밀리초가 소요되었습니다.");
		System.out.println("계산에 " + (t2-t1) + " 나노초가 소요되었습니다.");
	}
	
}
