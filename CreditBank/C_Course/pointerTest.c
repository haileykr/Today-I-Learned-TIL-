#include <stdio.h>

int main(void){
    char *str = "simple";

    printf("%x \n", *str);
    printf("%s\n", &str);
    printf("%s\n", str);
}