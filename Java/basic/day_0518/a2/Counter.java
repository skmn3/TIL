package Java.basic.day_0518.a2;

public class Counter {
	
	private int no;
	
	public Counter(int no) {
		this.no = no;
	}
	
	@Override
	protected void finalize() throws Throwable {
		System.out.println(no + " 빈 객체의 finalize()가 실행됨");
	}

}
