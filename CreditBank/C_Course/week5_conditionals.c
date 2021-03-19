#include <stdio.h>

void question_one(void){
    int i = 1;
    for (i;i<100;i++){
        if (i % 7 == 0  || i % 9 == 0)
            printf("%d ", i);
    }
}


void question_two(void){
    int lit, english, math;
    printf("Scores for Lit, English, Math: \n");
    scanf("%d %d %d", &lit,&english, &math);

    double average;
    average = (lit + english + math) / 3;
    

    printf("average: %f\n",average);
    
    if (average >= 90)
        printf("A\n");
    else if (average >= 80)
        printf("B\n");
    else if (average >= 70)
        printf("C\n");
    else if (average >= 50)
        printf("D\n");
    else
        printf("F\n");
    
}

void question_three(void){
    int num1,num2;
    printf("enter two nos: \n");
    scanf("%d %d", &num1, &num2);

    int result = (num1 >= num2) ? (num1 - num2) : (num2-num1 );
    printf("%d\n", result);
}

void question_four(void){
    
    int input;
    printf("choose a number from (1-5)\n");
    scanf("%d", &input);

    switch (input){
        case 1:
            printf("one");
            break;
        case 2:
            printf("two");
            break;
        case 3:
            printf("three");
            break;
        case 4:
            printf("four");
            break;
        case 5:
            printf("five");
            break;
        default:
            printf("out of range!");
    }
}

void question_five(void){
    int cur, is;
    for (cur = 1;cur < 10; cur++){
        if (cur %2 !=0)
            continue;
        for (is = 1;is< 10; is++){
            if (is > cur)
                break;
            printf("%d X %d = %d\n", cur, is, cur*is);
        }
    }
}


void question_six(void){
    int sum=0;
    int num=0;

    while (1)
    {
        sum += num;
        if (sum>5000)
            break;
        

        num++;
    }
    printf("%d\n", sum);
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