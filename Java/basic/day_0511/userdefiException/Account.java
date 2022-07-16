package Java.basic.day_0511.userdefiException;

public class Account { // 은행계좌 

	private long balance; // 잔고
	
	public Account() {}
	
	public long getBalance() {
		return balance;
	}
	
	public void deposit(int money) { // 예금
		balance += money;
	}
	
	public void withdraw(int money) throws BalanceInsufficientException { // 출금
		
		if(balance < money) {
			throw new BalanceInsufficientException("잔고 부족: " 
								+ (money-balance) + "원 더 필요함");
		}
		balance -= money;
	}
    
}
