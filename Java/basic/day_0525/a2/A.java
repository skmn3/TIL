package Java.basic.day_0525.a2;

@FunctionalInterface
interface B {
	public void run();
}

class Out {
	int out = 10;
	class Inner {
		int in = 5;
		
		void method() {
			int out = 1;
			@SuppressWarnings("unused")
			int in = 2;
			B b = () -> {
				System.out.println(this.in);
				System.out.println(Out.this.out);
				System.out.println(out);
			};
			b.run();
		}
	}

}

public class A {

	public static void main(String[] args) {
		Out o = new Out();
		Out.Inner i = o.new Inner();
		i.method();
	}

}
