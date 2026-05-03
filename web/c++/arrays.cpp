#include <iostream>
#include <string>

using namespace std;

int main () {
	string cars[4] = {"Volvo", "BMW", "Ford", "Mazda"};
	
	for (int i=0; i < (sizeof(cars)-1); i++ ){
		cout << "Car Brands: " << cars[i] << endl;
	}
}
