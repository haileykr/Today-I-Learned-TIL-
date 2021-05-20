#include <stdio.h>

void question_one(void){
    int arr2d[3][3];
    printf("%d \n", arr2d);
    printf("%d \n", arr2d[0]);
    printf("%d \n", &arr2d[0][0]);

    printf("sizeof(arr2d): %d\n", sizeof(arr2d));
    printf("sizeof(arr2d[0]): %d\n", sizeof(arr2d[0]));
}

void question_two(void){
    int arr1[2][2] = {
        {1, 2}, {3, 4}
    };

    int arr2[3][2] = {
        {1, 2}, {3, 4}, {5, 6}
    };

    int (*ptr)[2];
    int i;
    ptr = arr1;

    printf("**show 2, 2 arr**\n");
    for (i=0;i<2;i++){
        printf("%d %d \n", ptr[i][0], ptr[i][1]);
    };

    ptr = arr2;
    printf("**show 2,  3 arr2 ** \n");
    for (i=0;i<3;i++){
        printf("%d %d \n", ptr[i][0], ptr[i][1]);
    };

}

void question_three(void){
    void ShowArr2dstyle(int (*arr)[4], int column){
        int i, j;
        for (i=0;i<column;i++){
            for (j=0;j<4;j++)
                printf("%d ", arr[i][j]);
            printf("\n");
        }
        printf("\n");
    }

    int Sum2dArr(int arr[][4], int column){
        int i, j, sum = 0;
        for (i=0;i<column;i++){
            for(j=0;j<4;j++)
                sum += arr[i][j];
        }
        return sum;
    }

    int arr1[2][4] = {1, 2, 3, 4, 5, 6, 7, 8};
    int arr2[3][4] = {1, 1, 1, 3, 3, 3, 3, 5, 5, 5, 5};


    ShowArr2dstyle(arr1, sizeof(arr1)/sizeof(arr1[0]));
    ShowArr2dstyle(arr2,  sizeof(arr2)/sizeof(arr2[0]));
    printf("arr1의 합: %d  \n",  Sum2dArr(arr1,sizeof(arr1)/sizeof(arr1[0])));
    printf("arr2의 합: %d  \n",  Sum2dArr(arr2,sizeof(arr2)/sizeof(arr2[0])));
}

void question_next(void){ 
    void SoSimpleFunc(void){
        printf("I am so simple");
    }
    int num = 20;
    void *ptr;
    ptr = &num;
    printf("%p \n", ptr);
    ptr = SoSimpleFunc;
    printf("%p \n", ptr);
}


int main(void) { 
    question_one();
    question_two();

    question_three();

    question_next();

    return 0;
}