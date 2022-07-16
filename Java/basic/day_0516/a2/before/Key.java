package Java.basic.day_0516.a2.before;

public class Key {

	public int number;
	
	public Key(int number) {
		this.number = number;
	}
	
	@Override
	public boolean equals(Object obj) {
		if(obj instanceof Key) {
			Key compareKey = (Key) obj; 
			if(this.number == compareKey.number) {
				return true;
			}
		}
		return false;
	}

	// equals() 메소드를 재정의해서 number필드 값이 같으면 true를 리턴하도록 만듦
	// 그러나 hashCode() 메소드는 재정의 하지 않았기 때문에
	// Object의 hashCode() 메소드가 사용된다.

}
