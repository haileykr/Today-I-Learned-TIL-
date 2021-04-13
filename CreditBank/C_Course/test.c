#include <stdio.h>

int main(void){
    int num;
    scanf("%d", &num);

    switch((int)num/10){
        case 9:
            printf("A");
            break;
        case 8:
            printf("B");
            break;
        default:
            printf("Try again");
    }
}