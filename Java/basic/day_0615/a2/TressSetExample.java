package Java.basic.day_0615.a2;

import java.util.*;

public class TressSetExample {
	
	@SuppressWarnings("removal")
	public static void main(String[] args) {
		TreeSet<Integer> scores = new TreeSet<Integer>();
		scores.add(87);
		scores.add(new Integer(98));
		scores.add(new Integer(75));
		scores.add(new Integer(95));
		scores.add(new Integer(80));
		
		Integer score = null;
		
		score = scores.first();
		System.out.println("가장 낮은 점수: " + score);
		
		score = scores.last();
		System.out.println("가장 높은 점수: " + score + "\n");
		
		score = scores.lower(95);
		System.out.println("95점 아래 점수: " + score + "\n");
		
		score = scores.higher(new Integer(95));
		System.out.println("95점 위 점수: " + score + "\n");
		
		score = scores.floor(new Integer(95));
		System.out.println("95점 이거나 아래 점수: " + score + "\n");
		
		score = scores.ceiling(new Integer(95));
		System.out.println("95점 이거나 위 점수: " + score + "\n");
		
		while(!scores.isEmpty()) {
			score = scores.pollFirst();
			System.out.println(score + "(남은 객체 수: " + scores.size() + (")"));
		}
	}
	
}
