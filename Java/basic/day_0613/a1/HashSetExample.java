package Java.basic.day_0613.a1;

import java.util.*;

public class HashSetExample {

	public static void main(String[] args) {
		Set<String> set = new HashSet<String>();
		
		set.add("Java");
		set.add("Spring");
		set.add("NetWork");
		set.add("Java");
		set.add("OS");
		
		int size = set.size();
		System.out.println("총 객체 수: " + size);
		System.out.println();
		
		Iterator<String> iterator = set.iterator();
		
		while(iterator.hasNext()) {
			String element = iterator.next();
			System.out.println("\t" + element);
		}
		set.remove("Spring");
		set.remove("OS");
		
		System.out.println("총 객체 수: " + set.size());
		
		iterator = set.iterator();
		while(iterator.hasNext()) {
			String element = iterator.next();
			System.out.println("\t" + element);
		}
		
		set.clear();
		if(set.isEmpty()) {
			System.out.println("비어 있음");
		}
	}
	
}
