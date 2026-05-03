#include <iostream>

using namespace std;

int main (){
	int x;
	cout << "Enter day number:";
	cin >> x;
	
	switch (x) {
		case 1:
			cout << "Monday";
			break;
		case 2:
			cout << "Tuesday";
			break;
		default:
			cout << "Invalid day number.";
	}
}
