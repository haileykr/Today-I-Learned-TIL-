#include <stdio.h>
#include <string.h>

int main(void){
    // char a[] = "abcdef";
    // char b[] = "abcdef";

    // if (a == b) puts("same");
    // else puts("diff");
    // if (strcmp(a, b) == 0) puts("same");
    // else puts("diff");

    // enum syllable {DO, RE, MI, FA, SO, LA, TI};
    // printf("%d", RE);

    // char str[5];
    // int i;
    // for (i=0;i<3;i++){
    //     fgets(str, sizeof(str), stdin);
    //     printf("%s \n", str);
    
    // }

    // int *ptr;
    // int data[6] = {1, 3, 5, 7, 9};
    // ptr = data;
    // printf("%d %d %d", *ptr, *(ptr + 2), *ptr + 2);

    int f1(int *x, int *y){
        int i, s = 0;
        for (i=*x;i<=*y;i++)
            s = s+i;
        return s;
    }
    // int a = 2, b = 4;
    // printf("%d", f1(&a, &b));

    // char str1[10] = "abcde";
    // char str2[] = "abcde";
    // char *str3 = "abcde";

    // printf("%d %d %d", sizeof(str1), sizeof(str2), sizeof(str3));

    // short arr[] = {1, 2, 3};
    // short *a = arr;

    // printf("%p\n", a);
    // printf("%p", a+1);

    char a[3][2] = {{1, 2}, {3, 4}, {5, 6}};
    int y = *(*(a+1) + 0) + a[1][0];
    printf("%d", y);

    char buf[] = "abcdef";
    int n;

    n = strlen(buf) + sizeof(buf);
    printf("%d", n);

    typedef struct student{
        char name[20];
        int height;
    }ST;

    ST a1={"a", 190};
    ST a2={"b", 160};
    ST *p = &a1;
    a2.height = (*p).height - 10;

    printf("%d %d\n", (*p).height, a2.height);

    return 0;
}