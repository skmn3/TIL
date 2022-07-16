package Java.basic.day_0518.a2;

public class FinalizeExample {

	public static void main(String[] args) {
		@SuppressWarnings("unused")
		Counter counter = null;
		
		for(int i = 1; i <= 50; i++) {
			counter = new Counter(i);
			
			counter = null;
			
			System.gc();
		}
	}
	
}
