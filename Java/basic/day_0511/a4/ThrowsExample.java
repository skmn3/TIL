package Java.basic.day_0511.a4;

public class ThrowsExample {
	
	public static void main(String[] args) {
		try {
			findClass();
		} catch(ClassNotFoundException e) {
			System.out.println("클래스가 존재하지 않습니다.");
		}
	}

	public static void findClass() throws ClassNotFoundException {
		@SuppressWarnings({ "rawtypes", "unused" })
		Class clazz = Class.forName("java.lang.String2");
	}

}
