#include <iostream>
#include <ctime>
#include <string.h>
//#include "windows.h"
using namespace std;

int ff(char* s, int len) {
    __asm {
        mov edi, s
        mov ecx, len
        mov eax, 0
        lo: inc edi
            test eax, 1
            jz ev
            mov byte ptr[edi - 1], '+'
        ev: inc eax
            loop lo
    }
    return 0;
}

int cf(char* str, int len)
{
    for (int i = 0; i < len; i++) {
        if (i % 2 != 0) {
            str[i] = '+';
        }
    }
    return 0;
}

int main()
{
    char str[100] = { };
    cout << "Enter str: ";
    cin >> str;
    int len = strlen(str);
    cout << "Result: ";
    clock_t start = clock();
    //for (int i = 0; i < 1000000; i++) {
        ff(str, len);
    //}
    clock_t finish = clock();
    cout << str;
    cout << endl;
    cout << "Time:" << finish - start << endl;
    return 0;
}