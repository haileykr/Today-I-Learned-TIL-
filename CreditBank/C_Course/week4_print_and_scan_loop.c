#include <stdio.h>

void question_one(void){
    int num1, num2, num3;
    printf("enter three integers in decimal, octal, and hexadecimal numbers: ");
    scanf("%d %o %x", &num1,&num2,&num3);
    printf("%d %d %d", num1, num2, num3);
}

void question_two(void){
    int num;
    printf("enter the number of repeatance you want: ");
    scanf("%d",  &num);
    int i = 0;
    for (i; i<num; i++){
        printf("Hello World\n");
    }
    i = 0;
    while(i < num)
    {
        printf("Hello World\n");
        i++;
    }
}

void question_three(void){
    int sum = 0;
    int i = 0;
    int num, input;
    printf("How many integers do you want to enter?: ");
    scanf("%d", &num);

    while (i++ < num){
        scanf("%d", &input);
        sum += input;
    }
    printf("average: %f \n", (double)sum / num);


}

void question_four(void){
    int num1, num2;
    printf("What are two integers?: \n");
    scanf("%d %d", &num1, &num2);
    
    int sum =0;
    while (num1 <= num2){
        sum += num1;
        num1++;
    }
    printf("answer =  %d\n",sum);
}

void question_five(void){
    int i = 0;
    int sum=0;
    do {
        if (i % 2 == 0){
            sum += i;
        }
        i += 1;
    } while (i <= 100);

    printf("%d\n", sum);
}

void question_six(void){
    int cur, is;

    for (cur=2;cur<10;cur++){
        for(is=1;is<10;is++)
        {
            printf("%d X %d = %d\n", cur, is, cur*is);
        }
        printf("\n");
    }
}

int main(void){
    question_one();
    question_two();
    
    question_three();
    question_four();
    question_five();
    question_six();
    return 0;
}