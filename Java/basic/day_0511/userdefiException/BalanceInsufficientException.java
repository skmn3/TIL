package Java.basic.day_0511.userdefiException;

public class BalanceInsufficientException extends Exception {

	public BalanceInsufficientException() {}
	
	public BalanceInsufficientException(String message) {
		super(message);
	}

}
