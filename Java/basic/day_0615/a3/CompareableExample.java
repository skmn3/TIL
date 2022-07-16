package Java.basic.day_0615.a3;

import java.util.*;

public class CompareableExample {

	public static void main(String[] args) {
		TreeSet<Person> treeSet = new TreeSet<Person>();

		treeSet.add(new Person("홀길동", 45));
		treeSet.add(new Person("김자바", 25));
		treeSet.add(new Person("박지원", 31));
		
		Iterator<Person> iterator = treeSet.iterator();
		while(iterator.hasNext()) {
			Person person = iterator.next();
			System.out.println(person.name + ":" + person.age);
		}
	}
	
}
