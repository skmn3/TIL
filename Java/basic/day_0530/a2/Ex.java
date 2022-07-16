package Java.basic.day_0530.a2;

class A {

	void a() {
		System.out.println("a 실행");
	}
	
}

class B extends A {
	void b() {
		System.out.println("b 실행");
	}

}

public class Ex {

	public static <T extends A> void a(T t) {
		t.a();
		// t.b();
	}
	
	public static void main(String[] args) {
		
		a(new A());
		a(new B());
	}

}
