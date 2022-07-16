package Java.basic.day_0530.a3;

public class Course<T> {

	private String name;
	private T[] students;
	
	@SuppressWarnings("unchecked")
	public Course(String name, int capacity) {
		this.name = name;
		students = (T[]) (new Object[capacity]);
		// 타입 피라미터로 배열을 생성하려면 new T[n] 형태로 배열을 생성할 수 없고
		// (T[])(new Object[capacity])으로 생성해야한다.
	}
	
	public String getName() {
		return name;
	}
	
	public T[] getStudents() {
		return students;
	}
	
	public void add(T t) {
		for(int i = 0; i<students.length; i++) {
			if(students[i] == null) {
				students[i] = t;
				break;
			}
		}
	}
		
}
