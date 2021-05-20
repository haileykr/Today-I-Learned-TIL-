#include <stdio.h>

void question_one(void){
    int arr[5] = {1, 2, 3, 4, 5};
    int *ptr = arr;

    printf("%d %d %d %d %d\n", arr[0], arr[1], arr[2], arr[3], arr[4]);

    for (int i=0; i<5; i++){
        *ptr += 2;
        ptr++; 
    }

    printf("%d %d %d %d %d\n", arr[0], arr[1], arr[2], arr[3], arr[4]);
}

void question_two(void){
    int arr[5] = {1, 2, 3, 4, 5};
    int *ptr = arr;

    printf("%d %d %d %d %d\n", arr[0], arr[1], arr[2], arr[3], arr[4]);

    for (int i=0; i<5; i++){
        *(ptr+i) += 2;
    }

    printf("%d %d %d %d %d\n", arr[0], arr[1], arr[2], arr[3], arr[4]);
}

void question_three(void){
    int arr[5] = {1, 2, 3, 4, 5};
    int *ptr = &arr[4];

    int sum = 0;

    for (int i=0; i<5;  i++){
        sum += *ptr--;
    }
    printf("%d\n", sum);
}

void question_four(void){
    int arr[6] = {1, 2, 3, 4, 5, 6};
    int *ptr1 = arr;
    int *ptr2 = &arr[5];
    int i, temp;
    
    for (i=0;i<3;i++){
        temp = *ptr1;
        *ptr1 = *ptr2;
        *ptr2 = temp;
        ptr1++;
        ptr2--;
    }

    for (i=0;i<6;i++){
        printf("%d ", arr[i]);
    }
}

void question_five(void){
    int SquareByValue(int n){
        return n * n;
    }
    int SquareByReference(int *ptr){
        int num = *ptr;
        *ptr = num * num;
    }
        
    int num = 10;
    
    printf("\n");
    printf("%d\n", SquareByValue(num));
    SquareByReference(&num);
    printf("%d\n", num);

    
}


void question_six(void){
    void Swap3(int *ptr1, int* ptr2, int*ptr3){
        int temp = *ptr3;
        *ptr1 = *ptr2;
        *ptr2 = *ptr3;
        *ptr3 = temp;
    }
}

int main(void){
    question_one();
    question_two();
    question_three();
    question_four();
    question_five();

    return 0;
}