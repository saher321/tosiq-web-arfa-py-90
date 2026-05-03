#include <iostream>

using namespace std;

int main (){
	int i;
	int tblNmbr = 5;
	int sum = 0;
	for(i=1; i<=10; i++){
//		cout << "Iteration number is: " << i << endl;
		if (i % 2 == 1) {
			sum = sum + i;
		}
	}
	cout <<sum;
	cout << "--------------------------" << endl;
	
	for(i=1; i<=10; i++){
		cout << tblNmbr << " x " << i << " = " << tblNmbr*i<< endl;
	}
	cout << "--------------------------" << endl;

	
	for (i=1; i<=5; i++){
		for (int j=5; j>=i; j--){
//			cout << "i: " << i << ", j: " << j << endl;
//			cout << i << " x " << j << " = " << i*j<< endl;
				if (i<j) {
					cout << "*";
				} else {
					cout << "$";
				}
		}
		cout << endl;
	}
	
}
