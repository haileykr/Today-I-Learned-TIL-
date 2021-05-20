#include <stdio.h>


void question_one(void) { 

    int MaxNum(int n1, int n2, int n3){
        if (n1>n2)
            return (n1>n3) ? n1 :  n3;
        else   
            return (n2>n3)? n2 : n3;
    }

    int MinNum(int n1, int n2, int n3){
        if (n1 < n2)
            return (n1<n3) ? n1 : n3;
        else
            return (n2<n3) ? n2 : n3;
    }
    int num1, num2, num3;
    printf("정수 입력하세요: "); 

    scanf("%d %d %d ", &num1, &num2, &num3);
    printf("가장 큰 수: %d\n", MaxNum(num1, num2, num3));
    printf("가장 작은 수: %d\n", MinNum(num1, num2, num3));
}


void question_two(void){
    double CelToFah(double c) // 섭씨를 화씨로
    {
        return 1.8*c+32;
    }
    double FahToCel(double f) 
    {
        return (f-32)/1.8;
    }
    int sel;
    double num;
    scanf("%d", &sel);

    if(sel==1)
    {
        scanf("%lf", &num);
        printf("변환된 화씨: %f\n", CelToFah(num));
    }

    else if(sel==2)
    {
        scanf("%lf", &num);
        printf("변환된 섭씨: %f\n", FahToCel(num));
    }

    else 
    {
        printf("다시 선택!");
    }
};

void question_three(void)
{
    int ShowFiboSeries(int num)
    {
        int f1=0, f2=1, f3, i;
        if(num==1)
            printf("%d", f1);
        else
            printf("%d %d", f1, f2);
        
        for (i=0;i<num-2;i++)
        {
            f3 = f1+f2;
            printf("%d", f3);
            f1 = f2;
            f2 = f3;

        }
    }

    int n;
    scanf("%d", &n);
        

    ShowFiboSeries(n);
};

int main(void){
    question_one();
    question_two();
    question_three();

    return 0;
}