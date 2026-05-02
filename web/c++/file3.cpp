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
	
	// ---------------------------------------
	
//	int consumed_unit;
//	int residential_unit=23;
//	int commercial_unit=76;
//	int standard_unit=84;
	
	// if (){ // unit < 250 :: residence
	// } if else() { // unit > 250 && unit < 350 :: comm
	//} else { // unit > 350 :: std_unit
	// }
	
	
	
	
	
	
	
	
	
}
