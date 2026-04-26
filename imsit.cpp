#include <iostream>
#include <string>

void greet(std::string name = "%UserName%") {
    std::cout << "Hello, " << name << "!" << std::endl;
}

int main() {
    greet();              // параметр не задан
    greet("Alice");       // параметр задан
    return 0;
}