#include <stdio.h>

void foo(int *p, int v)
{
    while (*p != 0)
    {
        *p += v;
        p++;
    }
}

int main()
{
    int a[] = {4, 10, 100, 23, 99, 0};

    foo(a, 10);

    int *p = a;

    // skriv ut inkl 0
    while (1)
    {
        printf("%d ", *p);
        if (*p == 0) break;
        p++;
    }

    return 0;
}