package Java.basic.day_0511.a3;

public class MainTest3 {

	public static void main(String[] args) {
		try {
			String[] s= {"일"};
			
			String data1 = s[0];
			String data2 = s[1];
			int value1 = Integer.parseInt(data1);
			int value2 = Integer.parseInt(data2);
			int result = value1 + value2;
			System.out.println(data1 + "+" + data2 + "=" + result);
		} catch(ArrayIndexOutOfBoundsException | NumberFormatException e) {
			System.out.println("실행 매개값의 수가 부족하거나 숫자로 변환할 수 없습니다.");
		} catch(Exception e) { // 올바른 catch 순서 예제
			System.out.println("알 수 없는 예외 발생.");
		} finally {
			System.out.println("다시 실행하세요.");
		}
	}
	
}
