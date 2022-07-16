package Java.basic.day_0525.a1;

public class Test {
	
	public static void main(String[] args) {
		MyFunctionalInterface fi = (int a) -> { System.out.println(a);};
		fi.method(100);

		MyFunctionalInterface fi2 = (a) -> { System.out.println(a);};
		fi2.method(100);
		
		MyFunctionalInterface fi3 = a -> { System.out.println(a);};
		fi3.method(100);
		
		MyFunctionalInterface fi4 = a -> System.out.println(a);
		fi4.method(100);
		
		MyFunctionalInterface2 fi5 = () -> System.out.println(50);
		fi5.method();
		
		MyFunctionalInterface3 fi6 = a -> {return a;};
		System.out.println(fi6.method(1010));
		
		MyFunctionalInterface3 fi7 = a -> a;
		System.out.println(fi7.method(1020));
	}

}
