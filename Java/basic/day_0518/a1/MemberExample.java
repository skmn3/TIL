package Java.basic.day_0518.a1;

public class MemberExample {
	
	public static void main(String[] args) {
		// 원본 객체 생성
		Member original = new Member("홍길동", 25, new int[] {90,90},
				new Car("쏘나타"));
		
		// 복제 객체를 얻은 후에 참조 객체의 값을 변경
		Member cloned = original.getMember();
		cloned.scores[0] = 100;
		cloned.car.model = "그랜저";
		
		System.out.println("[복제 객체 필드값]");
		System.out.println("name: " + cloned.name);
		System.out.println("scores: " + cloned.scores[0] + " "
				+ cloned.scores[1]);
		System.out.println("car: " + cloned.car.model);
		System.out.println();
		
		System.out.println("[원본 객체 필드값]");
		System.out.println("name: " + original.name);
		System.out.println("scores: " + original.scores[0] + " "
				+ original.scores[1]);
		System.out.println("car: " + original.car.model);
		System.out.println();
	}

}
