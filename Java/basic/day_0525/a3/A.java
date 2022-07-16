package Java.basic.day_0525.a3;

@FunctionalInterface
interface B {
	public void run();
}

class Inner {
	void method(int arg) {
		@SuppressWarnings("unused")
		int local = 10;
		
		// Rag = 5; // arguments임.
		// local = 5;
		B b = () -> {
			// Rag = 5; // arguments임
			// local = 5;
			
			//System.out.println(Rag); // arguments임 // final 특성
			//System.out.println(local); // final 특성
		};
		b.run();
	}

}

public class A {

	public static void main(String[] args) {
		Inner i = new Inner();
		i.method(3);
	}

}
