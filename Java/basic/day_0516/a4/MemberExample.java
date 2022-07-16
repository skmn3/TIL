package Java.basic.day_0516.a4;

public class MemberExample {

	public static void main(String[] args) {
		// 객체 생성
		Member original = new Member("blue", "홍길동", "12345", 25, true);
		
		// 복제 객체를 얻은 후에 Password 변경
		Member cloned = original.getMember();
		cloned.password = "67890"; // 복제 객체에서 패스워드 변경
		
		System.out.println("복제 객체의 password: " + cloned.password);
		System.out.println("원본 객체의 password: " + original.password);
	}
	
}
