package Java.basic.day_0518.a3;

public class GetEnvExample {

	public static void main(String[] args) {
		String name = System.getenv("OS");
		System.out.println("OS: " + name);
		
		String name2 = System.getenv("Path");
		System.out.println("Path: " + name2);
	}
	
}
