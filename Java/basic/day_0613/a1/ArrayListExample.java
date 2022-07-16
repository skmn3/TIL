package Java.basic.day_0613.a1;

import java.util.*;

public class ArrayListExample {
	
	public static void main(String[] args) {
		List<String> list = new ArrayList<String>();
		
		list.add("Java");
		list.add("Spring");
		list.add("NetWork");
		list.add(2, "Database");
		list.add("Java");
		
		int size = list.size();
		System.out.println("총 객체 수: " + size);
		System.out.println();
		
		String skill = list.get(2);
		System.out.println("2: " + skill);
		System.out.println();
		
		int i = 0;
		for(String str: list) {
			System.out.println(i + ":" + str);
			i++;
		}
		System.out.println();
		
		list.remove(2);
		list.remove(2);
		list.remove("Spring");
		System.out.println();
		
		for(i = 0; i<list.size(); i++) {
			String str = list.get(i);
			System.out.println(i + ":" + str);
		}
		System.out.println();
	}
	
}
