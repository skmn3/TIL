package Java.basic.day_0516.a1;

public class StringTest {
	
	public static void main(String[] args) {
		String str1 = "문자열";
		String str2 = "문자열";
		
		String str3 = new String("문자열");
		String str4 = new String("문자열");
		
		boolean result1 = str1.equals(str2); // 문자열 비교 (Object의 equals 재정의)
		System.out.println(result1);
		
		result1 = (str1 == str2);
		System.out.println(result1);
		
		boolean result2 = str3.equals(str4); // 문자열 비교 (Object의 equals 재정의)
		System.out.println(result2);
		
		result2 = (str3 == str4);
		System.out.println(result2);
	}

}
