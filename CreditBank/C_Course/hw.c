#include <stdio.h>
#include <stdlib.h>

typedef struct preference //임의 구조체 
{
    char name[20];
    int age;
    char favorite[20];
} Preference;
int main(void)
{
    Preference arr[3] = { //임의 구조체 배열 초기화
        {"a", 18, "x"}, // 첫 번째 요소 초기화
        {"b", 18, "y"}, //두 번째 요소 초기화
        {"c", 19, "z"} //세 번째 요소 초기화
    };
    
    Preference* ptr[3];
    for (int i=0;i<3;i++){
        ptr[i] = (Preference*)malloc(sizeof(Preference));
        *ptr[i] = arr[i];
    }
    for (int i=0;i<3;i++){
        printf("name, age, favorite fruit:  %s, %d, %s\n", ptr[i]->name, ptr[i]->age,ptr[i]->favorite);
    }
    

    return 0;
}
