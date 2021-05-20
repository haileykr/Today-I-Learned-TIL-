#include <stdio.h>

void question_one(void){

    int villa[4][2];
    int popu, i, j;

    for (i=0;i<4;i++){
        for (j=0;j<2;j++){
            printf("%d층 %d호 인구수: ", i+1, j+1);
            scanf("%d", &villa[i][j]);
        }
    }

    for (i=0;i<4;i++){
        popu = 0;
        popu += villa[i][0];
        popu += villa[i][1];
        printf("%d층 인구수: %d \n", i+1, popu);
    }
    
}

void question_two(void){
    int i, j;

    int arr1[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    int arr2[3][3] = {
        {1},
        {4, 5},
        {7, 8, 9}
    };
    int arr3[3][3] = {1, 2, 3, 4, 5, 6, 7};

    for (i=0;i<3;i++){
        for (j=0;j<3;j++){
            printf("%d ", arr1[i][j]);
        }
        printf("\n");
    }
    printf("\n");

    for (i=0;i<3;i++){
        for (j=0;j<3;j++){
            printf("%d ", arr2[i][j]);
        }
        printf("\n");
    }
    printf("\n");

    for (i=0;i<3;i++){
        for (j=0;j<3;j++){
            printf("%d ", arr3[i][j]);
        }
        printf("\n");
    }
    printf("\n");
}

void question_three(void)
{
    int arr[3][9];
    int i, j;
    for (i=0;i<3;i++){
        for (j=0;j<9;j++){
            arr[i][j] = (i+2) * (j+1);
        }
    }

    for (i=0;i<3;i++){
        printf("%d 단 : ", i);
        for (j=0;j<9;j++){
            printf("%d ", arr[i][j]);
        }
        printf("\n");
    }
}

void question_four(void){
    void SwapIntPtr(int **dp1, int **dp2){
        int *temp = *dp1;
        *dp1 = *dp2;
        *dp2 = temp;
    }
    int num1 = 10;
    int num2 = 20;
    int *ptr1, *ptr2;
    ptr1 = &num1, ptr2 = &num2;
    printf("*ptr1, *ptr2: %d %d \n", *ptr1, *ptr2);
    SwapIntPtr(&ptr1, &ptr2);
    printf("*ptr1, *ptr2: %d %d \n", *ptr1, *ptr2);
}

void question_five(void){ 
    int num1 = 10, num2 = 20, num3 = 30;
    int *ptr1 = &num1;
    int *ptr2 = &num2;
    int *ptr3 = &num3;
    int *ptrArr[] = {ptr1, ptr2, ptr3};
    int **dptr = ptrArr;

    printf("%d %d %d \n", *(ptrArr[0]), *(ptrArr[1]), *(ptrArr[2]));
    printf("%d %d %d \n", *(dptr[0]), *(dptr[1]), *(dptr[2]));
}


int main(void){
    question_one();
    question_two();
    question_three();
    question_four();
    question_five();
    return 0;
}