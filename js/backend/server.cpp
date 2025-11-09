#include <iostream>
#include <string>
using namespace std;

int main() {
    cout << "Content-type:text/html\n\n";
    cout << "<html><body>";
    cout << "<h2>Welcome to Employee Financial Portal (Server)</h2>";
    cout << "<p>This is a mock backend written in C++.</p>";
    cout << "<p>In a real environment, this would handle login, signup, and account requests securely.</p>";
    cout << "</body></html>";
    return 0;
}
