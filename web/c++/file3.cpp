#include <iostream>

using namespace std;

int main () {
	int amount;
	int disc = 13;
	int payable;
	int disc_amount;
	
	cout << "Enter Shopping amount: ";
	cin >> amount;
	
	if (amount > 5000) {
		
		disc_amount = amount * disc/100;
		payable = amount - disc_amount;
		
		cout << "Total amount after 2% disc: " << payable;
	} else {
		cout << "Total amount: " << amount;
	}
	
}
