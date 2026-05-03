#include <iostream>

using namespace std;

int main (){
	int i;
	int tblNmbr = 5;
	for(i=1; i<=10; i++){
		cout << "Iteration number is: " << i << endl;
	}
	cout << "--------------------------" << endl;
	
	for(i=1; i<=10; i++){
		cout << tblNmbr << " x " << i << " = " << tblNmbr*i<< endl;
	}
}
